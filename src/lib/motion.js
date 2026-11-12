import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// OS 側で「視差効果を減らす」が有効なら派手な動きを止める
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ローディング演出が終わったことをページ全体に知らせるイベント名
export const PAGE_LOADED_EVENT = 'king:page-loaded'

export { gsap, ScrollTrigger }

// ローディングが終わったかどうか（ページ遷移で戻ってきたときはイベントを待たずに表示するため）
export const loadState = { done: false }

// ローディング完了後にコールバックを一度だけ実行する
export function onPageLoaded(cb) {
  if (loadState.done) {
    cb()
    return () => {}
  }
  const handler = () => cb()
  window.addEventListener(PAGE_LOADED_EVENT, handler, { once: true })
  return () => window.removeEventListener(PAGE_LOADED_EVENT, handler)
}
