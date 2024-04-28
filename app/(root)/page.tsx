import Image from 'next/image'
import banniere from '@/public/assets/images/logo2.svg'

export default function Home() {
  return (
    <main className='wrapper'>
      <section>
        <Image
          src={banniere}
          alt='banniere babyfoot time'
          priority
          className=''
        />
        <h1 className='text-3xl text-center uppercase'>
          spécialiste de l'animation autour du{' '}
          <span className='text-orange1'>baby-foot</span>
        </h1>
      </section>
    </main>
  )
}
