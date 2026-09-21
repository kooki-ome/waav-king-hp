import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/about', label: 'KINGについて' },
  { to: '/contest', label: 'コンテスト' },
  { to: '/past', label: '過去のコンテストについて' },
  { to: '/recruit', label: '秋新歓特設ページ' },
  { to: '/sponsorship', label: '協賛企業の皆様' },
  { to: '/contact', label: 'お問い合わせ', externalIcon: true },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="flex h-[72px] items-center gap-8 px-6 lg:px-8">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src="/images/bird.webp" alt="KINGのアイコン" className="h-[60px] w-[60px] object-contain" />
        </Link>

        <nav className="hidden flex-1 items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="font-serif-jp text-[20px] font-semibold text-black transition hover:opacity-60"
            >
              {item.label}
              {item.externalIcon ? (
                <span className="ml-1 align-middle text-sm" aria-hidden>
                  ↗
                </span>
              ) : null}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto xl:hidden"
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-[3px] w-7 bg-black" />
            <span className="block h-[3px] w-7 bg-black" />
            <span className="block h-[3px] w-7 bg-black" />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-4 border-t border-black/5 bg-white px-6 py-6 xl:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-serif-jp text-lg font-semibold text-black"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

export default Header
