'use client'

import * as React from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Link from 'next/link'
import { FaCalendarCheck } from 'react-icons/fa6'
import { GiClick } from 'react-icons/gi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'

export function Events() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            asChild
            className='border-orange2 p-3 my-2 font-playfair text-2xl text-orange2 hover:text-background hover:bg-orange2 md:p-6 md:text-4xl'
          >
            <div className='relative'>
              <span className='absolute flex h-6 w-6 -top-3 -right-4'>
                <PiNumberCircleTwoFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
                <PiNumberCircleTwoFill className='relative inline-flex rounded-full h-6 w-6' />
              </span>
              Venez à nos animations !
              <FaCalendarCheck className='ml-2 text-xl md:text-4xl' />
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className='sm:max-w-[425px] md:max-w-fit'>
          <DialogHeader>
            <DialogTitle className='text-2xl'>
              Nos prochaines animations :
            </DialogTitle>
            <DialogDescription className='text-xl lg:text-2xl'>
              <ul>
                <li className='my-2'>
                  le 20/03 au B29 :
                  <Link
                    href='https://tally.so/r/3xlxV9'
                    target='_blank'
                    className='ml-2 font-playfair text-xl text-orange2 hover:text-background hover:bg-orange2 lg:text-3xl'
                  >
                    Je m'inscris !
                    <GiClick className='ml-2 inline align-middle' />
                  </Link>
                </li>
                <li>
                  le 12/04 au Fût et à Mesure :
                  <Link
                    href='https://tally.so/r/3xlxV9'
                    target='_blank'
                    className='ml-2 font-playfair text-xl text-orange2 hover:text-background hover:bg-orange2 lg:text-3xl'
                  >
                    Je m'inscris !
                    <GiClick className='ml-2 inline align-middle' />
                  </Link>
                </li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant='outline'
          asChild
          className='border-orange2 p-3 my-2 font-playfair text-2xl text-orange2 hover:text-background hover:bg-orange2 md:p-6 md:text-4xl'
        >
          <div className='relative'>
            <span className='absolute flex h-6 w-6 -top-3 -right-4'>
              <PiNumberCircleTwoFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
              <PiNumberCircleTwoFill className='relative inline-flex rounded-full h-6 w-6' />
            </span>
            Venez à nos animations !
            <FaCalendarCheck className='ml-2 text-xl md:text-4xl' />
          </div>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle className='text-2xl'>
            Nos prochaines animations :
          </DrawerTitle>
          <DrawerDescription className='text-xl'>
            <ul>
              <li className='my-2'>
                le 20/03 au B29 :
                <Link
                  href='https://tally.so/r/3xlxV9'
                  target='_blank'
                  className='ml-2 font-playfair text-lg text-orange2 hover:text-background hover:bg-orange2 md:text-4xl'
                >
                  Je m'inscris !
                  <GiClick className='ml-2 inline align-middle' />
                </Link>
              </li>
              <li>
                le 12/04 au Fût et à Mesure :
                <Link
                  href='https://tally.so/r/3xlxV9'
                  target='_blank'
                  className='ml-2 font-playfair text-lg text-orange2 hover:text-background hover:bg-orange2 md:text-4xl'
                >
                  Je m'inscris !
                  <GiClick className='ml-2 inline align-middle' />
                </Link>
              </li>
            </ul>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Fermer</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
