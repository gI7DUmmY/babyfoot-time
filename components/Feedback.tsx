'use client'

import { createClient } from '@/lib/supabase/client'
import Review from '@/types/Review'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from './ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa6'

export const revalidate = 60

const Feedback = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const supabase = createClient()
  const [feedbackData, setFeedbackData] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data: feedback, error } = await supabase
        .from('feedback')
        .select()
        .order('id', { ascending: true })

      if (error) {
        console.error('Erreur lors de la récupération des données:', error)
      } else {
        setFeedbackData(feedback)
      }
      setLoading(false)
    }

    fetchFeedback()
  }, [])

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

  if (loading) {
    return (
      <section className='w-full p-1 my-4 flex gap-4 lg:w-4/5 lg:mx-auto lg:max-w-5xl'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div className='flex flex-col items-center gap-1 w-full' key={index}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton className='h-4 w-32 md:w-40' key={index} />
            ))}
            <Skeleton className='h-4 w-14 mt-3 md:w-28' />
          </div>
        ))}
      </section>
    )
  }

  return (
    <section className='w-full my-4' id='feedback'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
        setApi={setApi}
        className='backdrop-brightness-50 lg:w-11/12 lg:mx-auto'
      >
        <CarouselContent>
          {feedbackData &&
            feedbackData.map(feed => (
              <CarouselItem
                key={feed.id}
                className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-12'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex flex-col aspect-square items-center justify-evenly p-6 font-medium text-pretty md:text-lg'>
                      <blockquote className='text-shadow-sm/25 text-shadow-slate-300'>
                        <p>&laquo; {feed.quote} &raquo;</p>
                      </blockquote>
                      <div className='text-slate-500 capitalize italic text-base text-shadow-xs/25 text-shadow-white mt-2 md:text-lg'>
                        {feed.name}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>

      <div className='w-full pb-2 flex flex-row justify-center gap-2 backdrop-brightness-50'>
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
