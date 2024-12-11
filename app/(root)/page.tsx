import Image from 'next/image'
import banniere from '@/public/assets/images/banniere.svg'

import Titre from '@/components/Titre'
import Services from '@/components/Services'
import Socials from '@/components/Socials'
import About from '@/components/About'
import Feedback from '@/components/Feedback'

export default function Home() {
  return (
    <main className='select-none'>
      <section className='fixed top-0 left-0 bg-background w-screen z-10'>
        <Image
          src={banniere}
          alt='banniere babyfoot time'
          priority
          className='mx-auto'
        />
      </section>

      <Titre />

      <Services />

      <About />

      <Feedback />

      <Socials />

      <section className='mt-8 mb-2 text-center'>
        <p>
          Copyright ©️ 2024 Babyfoot Time
          <span className='md:hidden'>
            <br />
          </span>
          <span className='hidden md:inline'> | </span>Tous Doits Réservés
        </p>
      </section>
    </main>
  )
}
