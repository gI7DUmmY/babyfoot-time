import Image from 'next/image'
import banniere from '@/public/assets/images/logo2.svg'

import Titre from '@/components/Titre'
import Services from '@/components/Services'
import { Socials } from '@/components/Socials'

export default function Home() {
  return (
    <main className=''>
      <section className='fixed top-0 left-0 w-full bg-black'>
        <Image
          src={banniere}
          alt='banniere babyfoot time'
          priority
          className='mx-auto'
        />
      </section>

      <Titre />

      <Services />

      <Socials />

      <section className='mt-8 text-center'>
        <p>Copyright ©️ 2024 Babyfoot Time | Tous Doits Réservés</p>
      </section>
    </main>
  )
}
