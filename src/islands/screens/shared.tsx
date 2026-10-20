import { createSignal, onCleanup, Show } from 'solid-js'
import './shared.css'

/** A line icon from the page's sprite (`#i-<name>`). */
export const Icon = (p: { n: string; class?: string }) => (
  <svg class={p.class ? `i ${p.class}` : 'i'} aria-hidden="true">
    <use href={`#i-${p.n}`} />
  </svg>
)

export const bhd = (v: number) => `BHD ${v.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`

/** A short confirmation at the bottom of a screen, like the product's toasts. */
export function createToast(ms = 2600) {
  const [msg, setMsg] = createSignal('')
  let t: ReturnType<typeof setTimeout> | undefined
  const say = (m: string) => {
    setMsg(m)
    clearTimeout(t)
    t = setTimeout(() => setMsg(''), ms)
  }
  onCleanup(() => clearTimeout(t))
  const Toast = () => (
    <Show when={msg()}>
      <div class="mx-toast" role="status">
        <Icon n="check" />
        {msg()}
      </div>
    </Show>
  )
  return { say, Toast }
}
