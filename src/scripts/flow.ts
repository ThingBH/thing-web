import { type ActionKey, FLOWS, type FlowKey, type FlowNode } from '../data/flows'
import { langOf } from '../data/i18n'

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
let count = 0

const onScreen = (el: HTMLElement) => {
  const r = el.getBoundingClientRect()
  return !document.hidden && el.offsetParent !== null && r.bottom > 0 && r.top < innerHeight
}

function mount(host: HTMLElement) {
  const F = FLOWS[langOf(document.documentElement.lang)][host.dataset.flow as FlowKey]
  const first = F?.cols[0]
  const flow = host.querySelector<HTMLElement>('.flow')
  const svg = host.querySelector<SVGSVGElement>('svg.wires')
  if (!first || first === 'hub' || !flow || !svg) return
  const triggers: FlowNode[] = first
  const uid = `flow${++count}`
  const blocks = [...host.querySelectorAll<HTMLElement>('.fcol')]
  const cols = blocks.map((c) => [...c.querySelectorAll<HTMLElement>('.fnode')])
  let sel = 0
  let touched = false

  // Wires depend on layout only. The selection is a class on the first column's wires, ports and dots.
  function draw() {
    if (!flow || !svg) return
    const box = flow.getBoundingClientRect()
    if (!box.width) return
    // Columns run right to left on the Arabic site, so wires leave each node from its left edge.
    const rtl = getComputedStyle(flow).direction === 'rtl'
    svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`)
    let paths = ''
    let sparks = ''
    let dots = ''
    if (flow.classList.contains('v')) {
      // On phones each column is one block: a single wire joins block to block.
      for (let c = 0; c < blocks.length - 1; c++) {
        const a = blocks[c].getBoundingClientRect()
        const b = blocks[c + 1].getBoundingClientRect()
        const x1 = a.left + a.width / 2 - box.left
        const y1 = a.bottom - box.top
        const x2 = b.left + b.width / 2 - box.left
        const y2 = b.top - box.top
        paths += `<path class="wire on" id="${uid}-v${c}" d="M${x1} ${y1} L${x2} ${y2}"/>`
        dots += `<circle class="port on" cx="${x1}" cy="${y1}" r="5"/><circle class="port on" cx="${x2}" cy="${y2}" r="5"/>`
        if (!reduce)
          sparks += `<circle class="spark on" r="4"><animateMotion dur="1.4s" repeatCount="indefinite" begin="-${c * 0.5}s"><mpath href="#${uid}-v${c}"/></animateMotion></circle>`
      }
    } else {
      let n = 0
      for (let c = 0; c < cols.length - 1; c++) {
        cols[c].forEach((from, ai) => {
          cols[c + 1].forEach((to, bi) => {
            const a = from.getBoundingClientRect()
            const b = to.getBoundingClientRect()
            const x1 = (rtl ? a.left : a.right) - box.left
            const y1 = a.top + a.height / 2 - box.top
            const x2 = (rtl ? b.right : b.left) - box.left
            const y2 = b.top + b.height / 2 - box.top
            const dx = (x2 - x1) / 2
            const d = `M${x1} ${y1} C${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
            const cls = c > 0 || ai === sel ? ' on' : ''
            const da = c === 0 ? ` data-a="${ai}"` : ''
            paths += `<path class="wire${cls}"${da} id="${uid}-${n}" d="${d}"/>`
            dots += `<circle class="port${cls}"${da} cx="${x1}" cy="${y1}" r="5"/>`
            if (c > 0 || bi === 0) dots += `<circle class="port on" cx="${x2}" cy="${y2}" r="5"/>`
            if (!reduce)
              sparks += `<circle class="spark${cls}"${da} r="3.5"><animateMotion dur="${c === 0 ? 2.2 : 1.6}s" repeatCount="indefinite" begin="-${((n * 0.37) % 2).toFixed(2)}s"><mpath href="#${uid}-${n}"/></animateMotion></circle>`
            n++
          })
        })
      }
    }
    svg.innerHTML = paths + sparks + dots
  }

  function pick(i: number) {
    sel = i
    const node = triggers[i]
    cols[0].forEach((b, j) => {
      b.classList.toggle('on', j === i)
      b.setAttribute('aria-pressed', String(j === i))
    })
    if (node.v) {
      const [kind, title, sub] = node.v
      host.querySelector('.fv')?.setAttribute('class', `fv ${kind}`)
      host.querySelector('[data-vi] use')?.setAttribute('href', kind === 'ok' ? '#i-check' : '#i-x')
      const vt = host.querySelector('[data-vt]')
      const vs = host.querySelector('[data-vs]')
      if (vt) vt.textContent = title
      if (vs) vs.textContent = sub
    }
    const sc = F.scenarios?.[node.sc ?? 0]
    if (sc)
      for (const el of host.querySelectorAll<HTMLElement>('[data-k]')) {
        const label = el.querySelector('[data-l]')
        if (label) label.textContent = sc[el.dataset.k as ActionKey]
      }
    for (const el of svg?.querySelectorAll<SVGElement>('[data-a]') ?? [])
      el.classList.toggle('on', +(el.dataset.a ?? -1) === i)
  }

  host.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLElement>('button.fnode')
    if (!b) return
    touched = true
    pick(+(b.dataset.r ?? 0))
  })
  new ResizeObserver(() => {
    flow.classList.toggle('v', flow.clientWidth < 760)
    requestAnimationFrame(draw)
  }).observe(flow)
  if (!reduce)
    setInterval(() => {
      if (!touched && onScreen(flow)) pick((sel + 1) % triggers.length)
    }, 3400)
}

export function initFlows() {
  for (const host of document.querySelectorAll<HTMLElement>('[data-flow]')) mount(host)
}
