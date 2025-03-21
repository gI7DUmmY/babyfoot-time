import Link from 'next/link'
import Image from 'next/image'
import notFound from '/public/assets/images/404.svg'
import { Button } from '@/components/ui/button'
import { IoHome } from 'react-icons/io5'
import { TbArrowBigDownLineFilled } from 'react-icons/tb'

export default function NotFound() {
  return (
    <div className='w-screen h-screen pt-20 select-none text-center text-orange2 flex flex-col items-stretch gap-8'>
      <h1 className='block uppercase font-display text-3xl lg:text-6xl'>
        oups page introuvable
      </h1>
      <Image
        src={notFound}
        alt='page not found'
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='mx-auto block'
      />

      <TbArrowBigDownLineFilled className='block text-orange2 text-7xl animate-bounce mx-auto' />

      <div>
        <Button
          variant='outline'
          asChild
          className='border-orange2 p-3 font-playfair text-2xl text-orange2 hover:text-background hover:bg-orange2 md:p-6 md:text-5xl'
        >
          <Link href='/'>
            <IoHome className='mr-2 text-xl md:text-4xl' />
            Accueil
          </Link>
        </Button>
      </div>
    </div>
  )
}
