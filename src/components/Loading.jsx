import { useEffect, useRef, useState } from 'react'
import { gsap, loadState, PAGE_LOADED_EVENT, prefersReducedMotion } from '../lib/motion.js'
import { createEmbers } from '../lib/embers.js'

// ロード時の演出: 赤いベタ面の上をフェニックスが左下→右上へ飛び、火の粉の軌跡を引いて消える。
// 毎回再生・スキップなし。終わったら PAGE_LOADED_EVENT を window に投げる。
function Loading() {
  const rootRef = useRef(null)
  const birdRef = useRef(null)
  const canvasRef = useRef(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    const bird = birdRef.current
    const canvas = canvasRef.current
    if (!root || !bird || !canvas) return undefined

    const finish = () => {
      document.body.style.overflow = ''
      loadState.done = true
      setDone(true)
      window.dispatchEvent(new CustomEvent(PAGE_LOADED_EVENT))
    }

    if (prefersReducedMotion()) {
      finish()
      return undefined
    }

    document.body.style.overflow = 'hidden'

    // 火の粉はフェニックスの位置から噴き出す
    const embers = createEmbers(canvas, {
      count: 220,
      scale: 1.1,
      source: () => {
        const r = bird.getBoundingClientRect()
        return { x: r.left + r.width * 0.35, y: r.top + r.height * 0.6, spread: r.width * 0.5 }
      },
    })
    embers.start()

    const isMobile = window.innerWidth < 768
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
    tl.set(bird, { rotate: isMobile ? -20 : -8, opacity: 1 })
      .to(bird, { x: '125vw', y: '-55vh', duration: 2.1 })
      .to(root, { opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: finish }, '-=0.5')

    return () => {
      tl.kill()
      embers.destroy()
      document.body.style.overflow = ''
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden bg-king"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        ref={birdRef}
        className="absolute bottom-[16vh] left-[-90px] w-[90px] opacity-0 md:left-[-140px] md:w-[140px]"
      >
        <img src="/images/bird.webp" alt="" className="w-full brightness-0 invert" />
      </div>
    </div>
  )
}

export default Loading
