import Image from 'next/image'
import banniere from '@/public/assets/images/logo2.svg'
import Titre from '@/components/Titre'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className=''>
      <section>
        <Image
          src={banniere}
          alt='banniere babyfoot time'
          priority
          className='mx-auto'
        />
      </section>

      <Titre />

      <Services />
    </main>
  )
}
