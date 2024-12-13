'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from './ui/card'

const Feedback = () => {
  return (
    <section className='w-full p-1 my-4 lg:w-4/5 lg:mx-auto'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
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
                      &laquo; c'est trop bien ! Ca serait cool de demander un
                      baby-foot au père Noël !? &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2 md:text-lg'>
                    Un papa qui jouait avec son fils
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Feedback
