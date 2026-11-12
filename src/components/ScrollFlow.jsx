import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/motion.js'

// 巨大な英字がスクロールに合わせて横に流れる帯
function ScrollFlow({ text, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { xPercent: -10 },
        {
          xPercent: -45,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className={`overflow-hidden py-10 ${className}`} aria-hidden>
      <div ref={ref} className="whitespace-nowrap font-en text-[18vw] font-extrabold leading-none tracking-tight">
        {text}&nbsp;&nbsp;{text}
      </div>
    </div>
  )
}

export default ScrollFlow
