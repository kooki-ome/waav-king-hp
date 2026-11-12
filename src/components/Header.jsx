import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PillButton from './ui/PillButton.jsx'
import { winterStatus } from '../lib/winter.js'
import { WinterHeaderButton } from './WinterBanner.jsx'

const navItems = [
  { to: '/about', label: 'KINGについて' },
  { to: '/contest', label: 'コンテスト' },
  { to: '/past', label: '過去のコンテスト' },
  { to: '/sponsorship', label: '協賛企業の皆様' },
  { to: '/contact', label: 'お問い合わせ' },
]

// 白帯の固定ヘッダー。右端に赤いピル型CTA。
function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur">
      <div className="flex h-[72px] items-center gap-8 px-6 lg:h-[84px] lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/bird.webp" alt="" className="h-11 w-11 object-contain" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[15px] font-bold text-ink">Business Contest KING 実行委員会</span>
            <span className="font-en text-[10px] font-semibold tracking-[0.18em] text-ink-soft/70">
              SINCE 1996
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[15px] font-bold transition hover:text-king ${isActive ? 'text-king' : 'text-ink'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* Winter の開催期間中は Winter を、それ以外は秋新歓を出す */}
          {winterStatus() ? (
            <WinterHeaderButton className="!py-2.5 !pl-5 !pr-4 text-sm" />
          ) : (
            <PillButton to="/recruit" className="!py-2.5 !pl-5 !pr-4 text-sm">
              秋新歓
            </PillButton>
          )}
        </nav>

        <button
          type="button"
          className="ml-auto xl:hidden"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-[2px] w-7 bg-ink transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-7 bg-ink transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-7 bg-ink transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-5 border-t border-ink/5 bg-white px-6 py-8 xl:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-lg font-bold text-ink"
            >
              {item.label}
            </NavLink>
          ))}
          <div onClick={() => setOpen(false)}>
            {winterStatus() ? <WinterHeaderButton /> : <PillButton to="/recruit">秋新歓特設ページ</PillButton>}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
