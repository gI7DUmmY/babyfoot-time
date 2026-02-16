'use client'

import { createClient } from '@/lib/supabase/client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from './ui/card'
import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa6'

export const revalidate = 60

const Feedback = () => {
  interface Feedback {
    id: number
    quote: string
    name: string
  }
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const supabase = createClient()
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([])
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
      console.log(feedbackData)
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
    return <p>Chargement...</p>
  }

  return (
    <section className='w-full p-1 my-4 lg:w-4/5 lg:mx-auto'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
        setApi={setApi}
      >
        <CarouselContent className='-ml-2 md:-ml-4'>
          {feedbackData &&
            feedbackData.map((feed: Feedback) => (
              <CarouselItem
                key={feed.id}
                className='md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex flex-col aspect-square items-center justify-evenly p-6 font-medium md:text-lg text-pretty'>
                      <blockquote>
                        <p>&laquo; {feed.quote} &raquo;</p>
                      </blockquote>
                      <div className='text-slate-500 capitalize italic text-base mt-2 md:text-lg'>
                        {feed.name}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
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
