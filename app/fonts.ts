import { Playfair_Display, Playfair, Lora } from 'next/font/google'

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
