import type { Metadata } from 'next'
import { playfair_display, playfair, lora } from './fonts'
import './globals.css'
import Image from 'next/image'
import banniere from '@/public/assets/images/banniere.svg'
import Socials from '@/components/Socials'

export const metadata: Metadata = {
  metadataBase: new URL('https://babyfoot-time.fr'),
  title: 'Babyfoot Time',
  description:
    "Babyfoot Time : spécialiste de l'animation autour du baby-foot pour vos évènements privés et publics: personnels et professionnels. Ambiance chaleureuse et conviviale garantie! Location de baby-foot Bonzini : modèle officiel pour la compétition. Transport, montage, réglage et démontage des tables. Pour s'amuser, favoriser les échanges et se défouler. Activité mixte, intergénérationnelle, ludique et originale.",
  openGraph: {
    title: 'Babyfoot Time',
    description:
      "Babyfoot Time : spécialiste de l'animation autour du baby-foot pour vos évènements privés et publics: personnels et professionnels. Ambiance chaleureuse et conviviale garantie! Location de baby-foot Bonzini : modèle officiel pour la compétition. Transport, montage, réglage et démontage des tables. Pour s'amuser, favoriser les échanges et se défouler. Activité mixte, intergénérationnelle, ludique et originale.",
    url: 'https://babyfoot-time.fr',
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
    'twitter:domain': 'babyfoot-time.fr',
    'twitter:url': 'https://babyfoot-time.fr',
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
        <header className='fixed top-0 left-0 bg-background w-screen z-10'>
          <Image
            src={banniere}
            alt='banniere babyfoot time'
            priority
            className='mx-auto'
          />
        </header>
        <main className='mt-36 md:mt-52 lg:mt-60'>{children}</main>
        <footer className='text-center mt-4'>
          <Socials />

          <p className='mt-4 mb-2'>
            Copyright ©️ 2024 Babyfoot Time
            <span className='md:hidden'>
              <br />
            </span>
            <span className='hidden md:inline'> | </span>Tous Doits Réservés
          </p>
        </footer>
      </body>
    </html>
  )
}
