import {
  Playfair_Display,
  Playfair,
  Lora,
  Yellowtail,
  Open_Sans,
} from 'next/font/google'

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})
export const playfair = Playfair({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})
export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})
export const yellowtail = Yellowtail({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yellow-tail',
})
export const opensans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})
