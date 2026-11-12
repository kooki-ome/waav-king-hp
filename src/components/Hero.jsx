import { useEffect, useRef, useState } from 'react'
import { gsap, onPageLoaded, prefersReducedMotion } from '../lib/motion.js'
import PillButton from './ui/PillButton.jsx'

// トップのヒーロー: 全画面の写真スライド（クロスフェード＋微ズーム）＋キャッチコピー＋進行表示
const SLIDE_MS = 5000

const slides = [
  { src: '/images/photo-1.webp', alt: 'コンテストの様子' },
  { src: '/images/photo-2.webp', alt: '幹部写真' },
  { src: '/images/photo-3.webp', alt: '活動の様子' },
  { src: '/images/photo-4.webp', alt: '幹部写真' },
]

const pad = (n) => String(n + 1).padStart(2, '0')

function Hero() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [ready, setReady] = useState(() => prefersReducedMotion())
  const copyRef = useRef(null)

  // ローディングが終わってからコピーを浮かび上がらせる
  useEffect(() => {
    const el = copyRef.current
    if (!el) return undefined
    const targets = el.querySelectorAll('[data-hero-in]')
    if (prefersReducedMotion()) return undefined
    gsap.set(targets, { opacity: 0, y: 20, filter: 'blur(10px)' })
    return onPageLoaded(() => {
      setReady(true)
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 0.2,
      })
    })
  }, [])

  // 自動再生
  useEffect(() => {
    if (!playing || !ready) return undefined
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => window.clearInterval(id)
  }, [playing, ready, index])

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-ink text-white">
      {/* 写真 */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={s.src}
            alt={s.alt}
            className={`h-full w-full object-cover ${i === index && playing ? 'hero-kenburns' : ''}`}
          />
        </div>
      ))}
      {/* 暗幕（文字を読ませる） */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* コピー */}
      <div ref={copyRef} className="relative z-10 flex h-full flex-col justify-center px-6 pt-20 lg:px-16">
        <h1 data-hero-in className="text-[30px] font-black leading-[1.25] tracking-[0.04em] sm:text-[44px] lg:text-[60px] xl:text-[72px]">
          学生による、
          <br />
          学生のための挑戦を。
        </h1>
        <p data-hero-in className="mt-6 font-en text-base font-semibold tracking-wide text-white/85 sm:text-lg">
          Business Contest KING — Since 1996
        </p>

        {/* 進行表示 */}
        <div data-hero-in className="mt-12 flex items-center gap-4 font-en text-sm">
          <span>{pad(index)}</span>
          <span className="relative h-px w-16 overflow-hidden bg-white/30">
            <span
              key={`${index}-${playing}`}
              className={`absolute inset-y-0 left-0 w-full origin-left bg-white ${playing ? 'hero-progress' : ''}`}
              style={{ transform: playing ? undefined : 'scaleX(1)' }}
            />
          </span>
          <span className="text-white/60">{pad((index + 1) % slides.length)}</span>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? '一時停止' : '再生'}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-king text-white transition hover:bg-white hover:text-king"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M8 7h2.6v10H8zM13.4 7H16v10h-2.6z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M9 7l7 5-7 5z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 右下の浮遊カード */}
      <div className="absolute bottom-6 right-6 z-10 hidden md:block">
        <div className="rounded-2xl bg-white p-5 text-ink shadow-xl">
          <p className="font-en text-[11px] font-semibold tracking-[0.18em] text-king">RECRUIT INFO</p>
          <p className="mt-1 text-lg font-bold">秋新歓 開催中</p>
          <PillButton to="/recruit" className="mt-3">
            特設ページへ
          </PillButton>
        </div>
      </div>

      <style>{`
        @keyframes hero-kenburns { from { transform: scale(1); } to { transform: scale(1.08); } }
        .hero-kenburns { animation: hero-kenburns ${SLIDE_MS + 1500}ms linear forwards; }
        @keyframes hero-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .hero-progress { animation: hero-progress ${SLIDE_MS}ms linear forwards; }
        @media (prefers-reduced-motion: reduce) { .hero-kenburns { animation: none; } }
      `}</style>
    </section>
  )
}

export default Hero
