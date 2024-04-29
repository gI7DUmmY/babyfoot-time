import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Babyfoot Time',
  description:
    "Babyfoot Time : spécialiste de l'animation autour du baby-foot pour vos évènements privés et publics: personnels et professionnels. Ambiance chaleureuse et conviviale garantie! Location de baby-foot Bonzini : modèle officiel pour la compétition. Transport, montage, réglage et démontage des tables. Pour s'amuser, favoriser les échanges et se défouler. Activité mixte, intergénérationnelle, ludique et originale.",
  other: {
    'color-scheme': 'dark only',
    'twitter:image':
      'https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/tft_officiel.png?alt=media&token=eaabc2b1-206a-4aff-bed4-025ed922cbfe',
    'twitter:card': 'summary_large_image',
    'twitter:domain': 'babyfoot-time.vercel.app',
    'twitter:url': 'https://babyfoot-time.vercel.app',
    'twitter:title': 'Babyfoot Time',
    'twitter:description':
      "Babyfoot Time : spécialiste de l'animation autour du baby-foot pour vos évènements privés et publics: personnels et professionnels. Ambiance chaleureuse et conviviale garantie! Location de baby-foot Bonzini : modèle officiel pour la compétition. Transport, montage, réglage et démontage des tables. Pour s'amuser, favoriser les échanges et se défouler. Activité mixte, intergénérationnelle, ludique et originale.",
    'og:url': 'https://babyfoot-time.vercel.app',
    'og:image':
      'https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/tft_officiel.png?alt=media&token=eaabc2b1-206a-4aff-bed4-025ed922cbfe',
    'og:type': 'website',
    'og:title': 'Babyfoot Time',
    'og:description':
      "Babyfoot Time : spécialiste de l'animation autour du baby-foot pour vos évènements privés et publics: personnels et professionnels. Ambiance chaleureuse et conviviale garantie! Location de baby-foot Bonzini : modèle officiel pour la compétition. Transport, montage, réglage et démontage des tables. Pour s'amuser, favoriser les échanges et se défouler. Activité mixte, intergénérationnelle, ludique et originale.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
