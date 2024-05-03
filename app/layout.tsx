import type { Metadata } from 'next'
import { playfair_display, playfair, lora } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Babyfoot Time',
  description:
    "Babyfoot Time : spécialiste de l'animation autour du baby-foot pour vos évènements privés et publics: personnels et professionnels. Ambiance chaleureuse et conviviale garantie! Location de baby-foot Bonzini : modèle officiel pour la compétition. Transport, montage, réglage et démontage des tables. Pour s'amuser, favoriser les échanges et se défouler. Activité mixte, intergénérationnelle, ludique et originale.",
  openGraph: {
    title: 'Babyfoot Time',
    description:
      "Babyfoot Time : spécialiste de l'animation autour du baby-foot pour vos évènements privés et publics: personnels et professionnels. Ambiance chaleureuse et conviviale garantie! Location de baby-foot Bonzini : modèle officiel pour la compétition. Transport, montage, réglage et démontage des tables. Pour s'amuser, favoriser les échanges et se défouler. Activité mixte, intergénérationnelle, ludique et originale.",
    url: 'https://babyfoot-time.vercel.app',
    siteName: 'Babyfoot Time',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/logo_babyfoot-time%20v2.png?alt=media&token=0f5fa164-f97e-48d9-a8a0-18192a9d60c9',
        width: 800,
        height: 600,
      },
    ],
    locale: 'fr',
    type: 'website',
  },
  other: {
    'color-scheme': 'dark only',
    'twitter:image':
      'https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/logo_babyfoot-time%20v2.png?alt=media&token=0f5fa164-f97e-48d9-a8a0-18192a9d60c9',
    'twitter:card': 'summary_large_image',
    'twitter:domain': 'babyfoot-time.vercel.app',
    'twitter:url': 'https://babyfoot-time.vercel.app',
    'twitter:title': 'Babyfoot Time',
    'twitter:description':
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
      <body
        className={`${playfair_display.variable} ${playfair.variable} ${lora.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
