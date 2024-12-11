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
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; Une superbe animation : un vrai bonheur de rejouer
                      au baby après tant d'années&nbsp;! &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2'>
                    Martine, Responsable RH
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>&laquo; Je me suis trop amusé&nbsp;! &raquo;</p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2'>
                    Lucas, 12ans
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; Une prestation efficace et professionnelle&nbsp;!
                      &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2'>
                    Patrick, Organisateur Évènementiel
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; On est venues par hasard avec ma copine et on
                      s'est éclatées&nbsp;! &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2'>
                    Marion, Étudiante en prépa HEC
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium md:text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; J'ai pu confier mon fils à Laurent le temps de
                      faire mes courses et il ne voulait plus quitter le
                      babyfoot. &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize italic text-base mt-2'>
                    Henry, Franc-Maçon
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
