import Image from 'next/image'
import event from '@/public/assets/images/event_orange1.png'

const Titre = () => {
  return (
    <section className='parallax mt-36 h-[85vh] md:mt-52 lg:mt-60' id='titre'>
      <h1 className='text-2xl text-center uppercase pt-6 px-2 font-display font-extrabold drop-shadow-white text-pretty lg:text-3xl lg:px-6 xl:text-4xl'>
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
