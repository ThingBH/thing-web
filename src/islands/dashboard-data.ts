// ABC Gym sample data for the admin dashboard demo.
export type Status = 'ok' | 'wn' | 'no' | 'fz'
export type Person = {
  id: number
  n: string
  no: string
  plan: string
  st: Status
  ends: string
  left: number
  total: number
  last: string
  br: string
  unit?: string
}
export type Scan = { t: string; n: string; how: string; door: string; ok: boolean; why: string }
export type Period = { label: string; nc: number; am: number; tx: number; sales: string; pts: number[]; axis: string[] }
/** [name, coach, booked, capacity, colour class] */
export type Slot = [string, string, number, number, string]
export type Product = { n: string; p: number; ic: string; st: number | string }
export type Staff = { n: string; r: string; b: number; c: number; g: number; net: number }

export const people: Person[] = [
  {
    id: 1,
    n: 'Aisha Kamal',
    no: 'ABC-00412',
    plan: 'Gold 12 months',
    st: 'ok',
    ends: '25 Mar 2027',
    left: 165,
    total: 365,
    last: 'Yesterday, 19:42',
    br: 'Seef',
  },
  {
    id: 2,
    n: 'Mariam Hasan',
    no: 'ABC-00367',
    plan: 'Gold 3 months',
    st: 'wn',
    ends: '26 Oct 2026',
    left: 6,
    total: 90,
    last: 'Today, 07:05',
    br: 'Seef',
  },
  {
    id: 3,
    n: 'Omar Haddad',
    no: 'ABC-00388',
    plan: 'Silver 3 months',
    st: 'no',
    ends: '3 Oct 2026',
    left: 0,
    total: 90,
    last: '2 Oct, 18:10',
    br: 'Muharraq',
  },
  {
    id: 4,
    n: 'Fatima Al-Mahmood',
    no: 'ABC-00198',
    plan: 'Platinum 12 months',
    st: 'ok',
    ends: '21 May 2027',
    left: 214,
    total: 365,
    last: 'Today, 06:12',
    br: 'All branches',
  },
  {
    id: 5,
    n: 'Ali Mansoor',
    no: 'ABC-00276',
    plan: 'Platinum 12 months',
    st: 'fz',
    ends: 'Frozen until 1 Nov',
    left: 96,
    total: 365,
    last: '4 Oct, 20:31',
    br: 'Seef',
  },
  {
    id: 6,
    n: 'Yousif Abdulla',
    no: 'ABC-00455',
    plan: 'Visit days · 10',
    st: 'ok',
    ends: '20 Dec 2026',
    left: 3,
    total: 10,
    last: 'Today, 06:40',
    br: 'Seef',
    unit: 'visit days',
  },
  {
    id: 7,
    n: 'Noor Al-Sayed',
    no: 'ABC-00301',
    plan: 'Ladies 6 months',
    st: 'ok',
    ends: '12 Feb 2027',
    left: 115,
    total: 182,
    last: 'Yesterday, 16:20',
    br: 'Seef',
  },
  {
    id: 8,
    n: 'Hussain Jaffar',
    no: 'ABC-00421',
    plan: 'PT · 12 sessions',
    st: 'ok',
    ends: '30 Nov 2026',
    left: 6,
    total: 12,
    last: 'Today, 07:30',
    br: 'Seef',
    unit: 'sessions',
  },
  {
    id: 9,
    n: 'Zainab Ebrahim',
    no: 'ABC-00433',
    plan: 'Gold 3 months',
    st: 'wn',
    ends: '29 Oct 2026',
    left: 9,
    total: 90,
    last: 'Today, 06:58',
    br: 'Muharraq',
  },
]
export const statusLabel: Record<Status, string> = { ok: 'Active', wn: 'Expiring', no: 'Expired', fz: 'Frozen' }
export const badgeCls: Record<Status, string> = { ok: 'b-ok', wn: 'b-wn', no: 'b-no', fz: 'b-fz' }

export const periods = {
  today: {
    label: 'Today',
    nc: 4,
    am: 412,
    tx: 58,
    sales: '412.500',
    pts: [8, 12, 18, 30, 26, 41, 38],
    axis: ['6am', '9am', '12pm', '3pm', '6pm', '9pm', 'Now'],
  },
  d7: {
    label: 'Last 7 days',
    nc: 19,
    am: 421,
    tx: 344,
    sales: '2,186.750',
    pts: [210, 340, 280, 390, 310, 420, 236],
    axis: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
  d30: {
    label: 'Last 30 days',
    nc: 52,
    am: 428,
    tx: 1384,
    sales: '8,904.000',
    pts: [1800, 2100, 2350, 2654],
    axis: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  },
  mtd: {
    label: 'Month to date',
    nc: 37,
    am: 428,
    tx: 1206,
    sales: '6,842.250',
    pts: [1420, 1980, 1700, 1742],
    axis: ['1 Oct', '6 Oct', '12 Oct', '17 Oct'],
  },
} satisfies Record<string, Period>
export type PeriodKey = keyof typeof periods

export const scans: Scan[] = [
  { t: '07:31', n: 'Hussain Jaffar', how: 'QR code', door: 'Gate 1', ok: true, why: 'PT 6 of 12 left' },
  { t: '07:05', n: 'Mariam Hasan', how: 'Apple Wallet', door: 'Gate 2', ok: true, why: 'Ends in 6 days' },
  { t: '06:58', n: 'Zainab Ebrahim', how: 'QR code', door: 'Reception iPad', ok: true, why: 'Gold 3 months' },
  { t: '06:52', n: 'Omar Haddad', how: 'QR code', door: 'Gate 1', ok: false, why: 'No active membership' },
  { t: '06:40', n: 'Yousif Abdulla', how: 'NFC tap', door: 'Gate 2', ok: true, why: '3 of 10 visit days' },
  { t: '06:12', n: 'Fatima Al-Mahmood', how: 'Google Wallet', door: 'Gate 1', ok: true, why: 'All branches' },
]
export const nextScans: Omit<Scan, 't'>[] = [
  { n: 'Aisha Kamal', how: 'Apple Wallet', door: 'Gate 2', ok: true, why: 'Gold 12 months' },
  { n: 'Ali Mansoor', how: 'QR code', door: 'Gate 1', ok: false, why: 'Membership frozen' },
  { n: 'Noor Al-Sayed', how: 'NFC tap', door: 'Ladies studio', ok: true, why: 'Ladies 6 months' },
  { n: 'Ahmed Isa', how: 'Google Wallet', door: 'Gate 1', ok: false, why: 'Not allowed at this branch' },
]

export const days = ['Sat 17', 'Sun 18', 'Mon 19', 'Tue 20', 'Wed 21', 'Thu 22']
export const hours = ['06:30', '07:30', '18:00', '19:00', '20:00']
/** Keyed "day-hour". */
export const sched: Record<string, Slot> = {
  '0-0': ['HIIT', 'Sara', 18, 20, 'c1'],
  '0-2': ['Spin', 'Ali', 14, 18, 'c2'],
  '0-3': ['Boxing', 'Yousif', 9, 12, 'c4'],
  '1-1': ['Yoga', 'Noor', 11, 16, 'c3'],
  '1-2': ['HIIT', 'Sara', 20, 20, 'c1'],
  '1-4': ['Spin', 'Ali', 6, 18, 'c2'],
  '2-0': ['Spin', 'Ali', 12, 18, 'c2'],
  '2-3': ['Ladies HIIT', 'Sara', 15, 16, 'c3'],
  '3-1': ['Boxing', 'Yousif', 7, 12, 'c4'],
  '3-2': ['Yoga', 'Noor', 9, 16, 'c3'],
  '3-4': ['HIIT', 'Sara', 17, 20, 'c1'],
  '4-0': ['HIIT', 'Sara', 16, 20, 'c1'],
  '4-3': ['Spin', 'Ali', 18, 18, 'c2'],
  '5-2': ['Boxing', 'Yousif', 10, 12, 'c4'],
  '5-3': ['Yoga', 'Noor', 5, 16, 'c3'],
}

export const products: Product[] = [
  { n: 'Water 500ml', p: 0.3, ic: 'drop', st: 22 },
  { n: 'Protein Shake', p: 2.5, ic: 'cup', st: 14 },
  { n: 'Whey Scoop', p: 2.0, ic: 'pill', st: 17 },
  { n: 'Gym Towel', p: 3.0, ic: 'shirt', st: 11 },
  { n: 'Day Pass', p: 5.0, ic: 'ucheck', st: '∞' },
  { n: 'Gold 1 month', p: 30.0, ic: 'cal', st: '∞' },
  { n: 'PT Session', p: 15.0, ic: 'dumbbell', st: '∞' },
  { n: 'Locker, monthly', p: 4.0, ic: 'lock', st: 6 },
]

export const staff: Staff[] = [
  { n: 'Sara Ahmed', r: 'Head Coach', b: 650, c: 135, g: 52, net: 733 },
  { n: 'Ali Hassan', r: 'Coach', b: 480, c: 90, g: 38.4, net: 531.6 },
  { n: 'Yousif Nasser', r: 'Boxing Coach', b: 520, c: 60, g: 41.6, net: 538.4 },
  { n: 'Layla Hassan', r: 'Front Desk', b: 420, c: 0, g: 33.6, net: 386.4 },
  { n: 'Noor Khalil', r: 'Yoga Coach', b: 450, c: 45, g: 36, net: 459 },
]

export const bhd = (v: number) => `BHD ${v.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
export const initials = (n: string) =>
  n
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
