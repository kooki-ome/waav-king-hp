// 火の粉のパーティクル（canvas 2D）。秋新歓LPで使ったものを React 用に整理した版。
// createEmbers(canvas, { count, perPx, scale, source }) → { start, stop, resize, destroy }
export function createEmbers(canvas, opts = {}) {
  const ctx = canvas.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  let W = 0
  let H = 0
  const ps = []
  let raf = 0
  let running = false
  let last = 0
  const count = opts.count || 80
  const perPx = opts.perPx || 0 // 指定時は面積から粒数を決める（count は上限）
  const scale = opts.scale || 1
  const getSource = opts.source || null // 発生源 {x,y,spread} を返す関数（null なら画面下端全体）

  function spawn(anywhere) {
    const s = (1 + Math.random() * 2.6) * scale
    let src = getSource ? getSource() : null
    let x
    let y
    if (src && Math.random() < 0.3) src = null
    if (src) {
      const g = (Math.random() + Math.random() + Math.random()) / 3 - 0.5
      x = src.x + g * src.spread * 2
      y = src.y + Math.random() * src.spread * 0.5
      if (anywhere) y -= Math.random() * (src.y + 40)
    } else {
      x = Math.random() * W
      y = anywhere ? Math.random() * H : H + 10
    }
    return {
      x,
      y,
      r: s,
      vy: -(26 + Math.random() * 70) * (0.6 + s * 0.12),
      vx: (Math.random() - 0.5) * 22,
      ph: Math.random() * Math.PI * 2,
      sw: 0.6 + Math.random() * 1.6,
      life: 0.7 + Math.random() * 0.5,
      decay: 0.1 + Math.random() * 0.12,
      hue: 12 + Math.random() * 34, // 12:赤橙 〜 46:金
    }
  }

  function resize() {
    const r = canvas.getBoundingClientRect()
    W = Math.max(1, r.width)
    H = Math.max(1, r.height)
    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const n = perPx ? Math.round(Math.min(count, (W * H) / perPx)) : count
    while (ps.length < n) ps.push(spawn(true))
    ps.length = n
  }

  function step(t) {
    if (!running) return
    const dt = Math.min(0.05, (t - last) / 1000 || 0.016)
    last = t
    ctx.clearRect(0, 0, W, H)
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i]
      p.ph += dt * p.sw
      p.x += (p.vx + Math.sin(p.ph) * 26) * dt
      p.y += p.vy * dt
      p.life -= dt * p.decay
      if (p.y < -20 || p.life <= 0 || p.x < -20 || p.x > W + 20) {
        ps[i] = spawn(false)
        continue
      }
      const a = Math.max(0, Math.min(1, p.life)) * (0.6 + 0.4 * Math.sin(p.ph * 2))
      const R = p.r * 3.4
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R)
      g.addColorStop(0, `hsla(${p.hue + 10},100%,88%,${a})`)
      g.addColorStop(0.35, `hsla(${p.hue},100%,62%,${a * 0.7})`)
      g.addColorStop(1, `hsla(${p.hue},100%,50%,0)`)
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(p.x, p.y, R, 0, Math.PI * 2)
      ctx.fill()
    }
    raf = requestAnimationFrame(step)
  }

  function start() {
    if (running) return
    running = true
    last = performance.now()
    raf = requestAnimationFrame(step)
  }
  function stop() {
    running = false
    cancelAnimationFrame(raf)
  }
  function onVisibility() {
    if (document.hidden) stop()
    else start()
  }
  function destroy() {
    stop()
    window.removeEventListener('resize', resize)
    document.removeEventListener('visibilitychange', onVisibility)
  }

  window.addEventListener('resize', resize)
  document.addEventListener('visibilitychange', onVisibility)
  resize()
  return { start, stop, resize, destroy }
}
