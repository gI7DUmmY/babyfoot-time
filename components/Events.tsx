'use client'

import * as React from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Link from 'next/link'
import { FaCalendarCheck } from 'react-icons/fa6'
import { GiClick } from 'react-icons/gi'
import { PiNumberCircleOneFill } from 'react-icons/pi'

export function Events() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  // version desktop > 768px
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            asChild
            className='border-orange2 p-3 my-2 font-playfair text-2xl text-orange2 group hover:text-background hover:bg-orange2 hover:cursor-pointer md:p-6 md:text-4xl'
          >
            <div className='relative'>
              <span className='absolute flex h-6 w-6 -top-3 -right-4'>
                <PiNumberCircleOneFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
                <PiNumberCircleOneFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
              </span>
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
              <ul className='flex flex-col items-start gap-4'>
                <li>
                  le 24/05 au Fût et à Mesure :
                  <Link
                    href='https://tally.so/r/mZQ7v5'
                    target='_blank'
                    className='ml-2 p-1 font-playfair text-xl text-orange2 hover:text-background hover:bg-orange2 hover:rounded-2xl lg:text-3xl'
                  >
                    Je m'inscris !
                    <GiClick className='ml-2 inline align-middle' />
                  </Link>
                </li>
              </ul>
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
            <span className='absolute flex h-6 w-6 -top-3 -right-4'>
              <PiNumberCircleOneFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
              <PiNumberCircleOneFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange2' />
            </span>
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
            <ul className='flex flex-col gap-4 items-center text-center'>
              <li>
                le 24/05 au Fût et à Mesure
                <br />
                <Link
                  href='https://tally.so/r/mZQ7v5'
                  target='_blank'
                  className='ml-2 font-playfair text-xl text-orange2'
                >
                  Je m'inscris !
                  <GiClick className='ml-2 inline align-middle' />
                </Link>
              </li>
            </ul>
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
