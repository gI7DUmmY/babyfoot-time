import React from 'react'
import ReactPlayer from 'react-player'

import Image from 'next/image'
import event from '@/public/assets/images/event_orange.png'

const Titre = () => {
  return (
    <section className='h-[85vh]'>
      <h1 className='text-2xl text-center uppercase pt-6 px-2 font-display font-extrabold drop-shadow-white text-pretty md:text-3xl md:px-6 md:pt-8 xl:text-4xl'>
        spécialiste de l'animation autour du{' '}
        <span className='text-orange1'>baby-foot</span>
      </h1>

      <div className='relative w-full h-[74.5vh] my-2 md:h-[69.7vh] lg:h-[70.3vh] xl:h-[79vh]'>
        <ReactPlayer
          src='https://www.tiktok.com/@babyfoot.time/video/7491012326083022102'
          playing
          loop
          muted={true}
          style={{width: '100%', height: 'auto', aspectRatio: '9/16'}}
          className='static'
        />

        <Image
          src={event}
          alt='event'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='absolute top-0 left-[30%] h-1/4 w-auto md:left-[38%] lg:left-[42%] xl:left-[40%]'
        />
      </div>
    </section>
  )
}

export default Titre
