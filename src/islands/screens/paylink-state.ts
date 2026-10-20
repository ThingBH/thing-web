import { createSignal } from 'solid-js'

/** PL-7K3M9Q, shared by the pay page and the payment links list: null until the pay page is paid. */
export const [linkPaid, setLinkPaid] = createSignal<{ at: Date; method: string } | null>(null)
