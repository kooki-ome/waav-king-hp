// セクション冒頭の小さなピル型ラベル（例: ABOUT US）
function SectionLabel({ children, tone = 'king', className = '' }) {
  const tones = {
    king: 'border-king text-king',
    white: 'border-white text-white',
    ink: 'border-ink text-ink',
  }
  return (
    <span
      className={`inline-block rounded-full border px-4 py-1 font-en text-[11px] font-semibold tracking-[0.18em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

export default SectionLabel
