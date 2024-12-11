import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from './ui/card'

const Feedback = () => {
  return (
    <div className='w-full p-1 my-4 lg:w-4/5 lg:mx-auto'>
      <Carousel>
        <CarouselContent className='-ml-2 md:-ml-4'>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; Une superbe animation : un vrai bonheur de rejouer
                      au baby après tant d'années ! &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize'>
                    Martine, Responsable RH
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium text-lg text-pretty'>
                  <blockquote>
                    <p>&laquo; Je me suis trop amusé ! &raquo;</p>
                  </blockquote>
                  <div className='text-slate-500 capitalize'>Lucas, 12ans</div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; Une prestation efficace et professionnelle !
                      &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize'>
                    Patrick, Organisateur Évènementiel
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; On est venues par hasard avec ma copine et on
                      s'est éclatées ! &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize'>
                    Marion, Étudiante en prépa HEC
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col aspect-square items-center justify-center p-6 font-medium text-lg text-pretty'>
                  <blockquote>
                    <p>
                      &laquo; J'ai pu confier mon fils à Laurent le temps de
                      faire mes courses et il ne voulait plus quitter le
                      babyfoot. &raquo;
                    </p>
                  </blockquote>
                  <div className='text-slate-500 capitalize'>
                    Henry, Franc-Maçon
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Feedback
