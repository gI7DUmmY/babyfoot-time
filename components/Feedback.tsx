'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from './ui/card'
import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa6'

const Feedback = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className='w-full p-1 my-4 lg:w-4/5 lg:mx-auto'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent className='-ml-2 md:-ml-4'>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-evenly p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; En espérant continuer à travailler avec vous sur
                      de prochaines manifestations ludiques&nbsp;! &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2 md:text-lg'>
                    Matthieu, organisateur du Festival du jeu
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-evenly p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; ça m'a donné envie de m'y mettre à fond et faire
                      de la compétition &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2 md:text-lg'>
                    Aurore, animatrice collège
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-evenly p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; C'était top, organisation, lieu, ambiance et bon
                      esprit ! Merci ! Vivement le prochain ! &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2 md:text-lg'>
                    Damien
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-evenly p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; Merci pour l'organisation, c'était parfait &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2 md:text-lg'>
                    Bertrand, dirigeant entreprise
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-evenly p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; bravo pour l'organisation de ce tournoi, merci !
                      &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2 md:text-lg'>
                    J&eacute;r&ocirc;me
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-evenly p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>&laquo; Merci Laurent, c'était top ! &raquo;</p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2 md:text-lg'>
                    Lou
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className='w-full flex flex-row justify-center gap-2'>
        {count > 2 &&
          api
            ?.scrollSnapList()
            .map((feed, _index) => (
              <FaCircle
                className={`text-orange1 ${
                  current === _index + 1 ? 'opacity-100' : 'opacity-20'
                }`}
                key={feed}
                id={_index.toString()}
              />
            ))}
      </div>
    </section>
  )
}

export default Feedback
