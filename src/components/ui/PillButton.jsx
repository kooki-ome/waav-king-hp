import { Link } from 'react-router-dom'

// ピル型ボタン。テキストと矢印の間に点線の仕切り。
// variant: king（赤地・白字）/ white（白地・赤字）/ outline（透明・白枠）
function PillButton({ to, href, variant = 'king', className = '', children }) {
  const base =
    'group inline-flex items-center gap-4 rounded-full py-3.5 pl-7 pr-5 text-[15px] font-bold tracking-wide transition-colors duration-500'
  const variants = {
    king: 'bg-king text-white hover:bg-ink',
    white: 'bg-white text-king hover:bg-ink hover:text-white',
    outline: 'border border-white text-white hover:bg-white hover:text-king',
  }
  const cls = `${base} ${variants[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span className="h-5 border-l border-dashed border-current opacity-60" aria-hidden />
      <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  )
}

export default PillButton
