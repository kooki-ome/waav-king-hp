import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/motion.js'

// 子要素を、画面に入ったときに順番に「ぼやけ → くっきり + 少し上へ」で表示する。
// <ScrollReveal delay={0.2} stagger={0.15} as="section" className="...">…</ScrollReveal>
function ScrollReveal({ as: Tag = 'div', delay = 0, stagger = 0.2, className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power2.out',
          stagger,
          delay,
          scrollTrigger: { trigger: el, start: 'top 75%' },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [delay, stagger])

  return (
    <Tag ref={ref} className={`scroll-reveal ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export default ScrollReveal
