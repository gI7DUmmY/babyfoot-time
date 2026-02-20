'use client'

import { createClient } from '@/lib/supabase/client'

import * as React from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger
} from '@/components/ui/drawer'
import { FaCalendarCheck } from 'react-icons/fa6'
import PastilleEvents from '@/components/PastilleEvents'
import DateEvents from './DateEevents'
import Event from '@/types/Event'

export const revalidate = 60

export function Events() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const supabase = createClient()
  const [eventsData, setEventsData] = React.useState<Event[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchEvents = async () => {
      const { data: events, error } = await supabase
        .from('events')
        .select()
        .order('date', { ascending: true })

      if (error) {
        console.error('Erreur lors de la récupération des données:', error)
      } else {
        setEventsData(events)
      }
      setLoading(false)
    }

    fetchEvents()
  }, [])

  // version desktop > 768px
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            asChild
            className='border-orange2 p-3 font-playfair text-2xl text-orange2 group hover:text-background hover:bg-orange2 hover:cursor-pointer md:p-6 md:text-4xl'
          >
            <div className='relative'>
              <PastilleEvents num={eventsData.length} />
              <div className='flex place-content-center items-baseline'>
                <FaCalendarCheck className='mr-2 text-xl md:text-2xl' />
                Venez à nos animations !
              </div>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className='sm:max-w-[425px] md:max-w-max p-8'>
          <DialogHeader>
            <DialogTitle className='text-2xl text-center mt-2 mb-6'>
              Nos prochaines animations
            </DialogTitle>
            <div className='text-xl lg:text-2xl'>
              <DateEvents events={eventsData} />
            </div>
            <DialogDescription />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  // version smartphone < 768px
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant='outline'
          asChild
          className='border-orange2 p-3 my-2 font-playfair text-2xl text-orange2 group hover:text-background hover:bg-orange2 md:p-6 md:text-4xl'
        >
          <div className='relative'>
            <PastilleEvents num={eventsData.length} />
            <div className='flex place-content-center items-baseline'>
              <FaCalendarCheck className='mr-2 text-xl md:text-4xl' />
              Venez à nos animations !
            </div>
          </div>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle className='text-2xl text-center'>
            Nos prochaines animations
          </DrawerTitle>
          <div className='text-xl my-4'>
            <DateEvents events={eventsData} />
          </div>
          <DrawerDescription />
        </DrawerHeader>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button className='border border-orange2 font-playfair text-2xl text-orange2 hover:text-background hover:bg-orange2'>
              Fermer
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
