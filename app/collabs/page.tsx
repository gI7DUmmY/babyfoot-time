import { Suspense } from 'react'
import Link from 'next/link'

import { Skeleton } from '@/components/ui/skeleton'
import { FaFaceGrinStars } from 'react-icons/fa6'
import { SiHuggingface } from 'react-icons/si'
import { TiArrowBack } from 'react-icons/ti'
import CollabsSethtwo from '@/components/CollabsSethtwo'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <section className='pt-20'>
      <h1 className='mb-4 text-2xl font-playfair font-semibold leading-none tracking-tight text-orange2 uppercase text-center lg:text-4xl'>
        <FaFaceGrinStars className='inline mr-3 align-text-top' />
        Nos Collaborations{' '}
        <SiHuggingface className='inline ml-3 align-text-top' />
      </h1>
      <Suspense
        fallback={
          <Skeleton className='w-[80vw] h-[60vh] md:w-[40vw] lg:w-[30vw] rounded-lg mx-auto' />
        }
      >
        <CollabsSethtwo />
      </Suspense>

      <div className='w-full flex justify-center mt-4'>
        <Button
          variant='outline'
          asChild
          className='border-orange2 p-3 font-playfair text-2xl text-orange2 hover:text-background hover:bg-orange2 md:p-6 md:text-3xl'
        >
          <Link href='/#fonction'>
            <TiArrowBack className='mr-2 text-xl md:text-3xl' />
            Accueil
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default page
