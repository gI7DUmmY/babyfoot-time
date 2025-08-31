import Image from 'next/image'
import event from '@/public/assets/images/event_orange.png'

const Titre = () => {
  return (
    <section className='parallax h-[85vh]' id='titre'>
      <h1 className='text-2xl text-center uppercase pt-6 px-2 font-display font-extrabold drop-shadow-white text-pretty md:text-3xl md:px-6 md:pt-8 xl:text-4xl'>
        spécialiste de l'animation autour du{' '}
        <span className='text-orange1'>baby-foot</span>
      </h1>

      <Image
        src={event}
        alt='event'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='mx-auto pt-28'
      />
    </section>
  )
}

export default Titre
