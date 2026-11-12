import { winter, winterStatus } from '../lib/winter.js'
import PillButton from './ui/PillButton.jsx'

// 2026 Winter の特設ページへの導線（ホームの帯とヘッダーのボタン）。期間外は何も出さない。

function WinterBanner() {
  const status = winterStatus()
  if (!status) return null

  return (
    <section className="bg-[#0d0820] px-6 py-16 text-white lg:px-16 lg:py-20">
      <a
        href={winter.href}
        className="group mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.15fr_1fr] lg:gap-14"
      >
        <div className="overflow-hidden rounded-3xl border border-[#c9b3ff]/25 bg-[#1a1033]">
          <img
            src={winter.image}
            alt="Business Contest KING 2026 Winter のアイキャッチ"
            width="1080"
            height="606"
            className="aspect-[1080/606] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.visibility = 'hidden'
            }}
          />
        </div>
        <div>
          <p className="flex items-center gap-3 font-en text-xs font-semibold tracking-[0.2em] text-[#c9b3ff]">
            <span>NEXT CONTEST</span>
            <span className="h-px w-10 bg-[#c9b3ff]/50" aria-hidden />
            <span className="rounded-full bg-[#c9b3ff] px-3 py-1 font-jp tracking-[0.1em] text-[#1a1033]">
              {status.label}
            </span>
          </p>
          <h2 className="mt-5 font-en text-[28px] font-black leading-tight sm:text-4xl">
            Business Contest KING
            <br />
            2026 Winter
          </h2>
          <p className="mt-4 text-lg font-bold">自分史上最高に熱い冬。</p>
          <dl className="mt-6 space-y-2 text-sm leading-7 text-white/80">
            <div className="flex gap-4">
              <dt className="w-10 shrink-0 text-[#c9b3ff]">日程</dt>
              <dd>2026年12月26日（土）〜27日（日）</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-10 shrink-0 text-[#c9b3ff]">会場</dt>
              <dd>国立オリンピック記念青少年総合センター</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-4 rounded-full bg-white py-3.5 pl-7 pr-5 text-[15px] font-bold tracking-wide text-[#1a1033] transition-colors duration-500 group-hover:bg-[#c9b3ff]">
              <span>特設ページへ</span>
              <span className="h-5 border-l border-dashed border-current opacity-60" aria-hidden />
              <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </span>
            <span className="text-sm font-bold text-[#ffb9a0]">{status.note}</span>
          </div>
        </div>
      </a>
    </section>
  )
}

// ヘッダー用の小さなボタン（開催期間中だけ出す）
export function WinterHeaderButton({ className = '', onClick }) {
  if (!winterStatus()) return null
  return (
    <span onClick={onClick}>
      <PillButton href={winter.href} newTab={false} className={className}>
        2026 Winter
      </PillButton>
    </span>
  )
}

export default WinterBanner
