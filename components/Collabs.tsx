import Image from 'next/image'
import Link from 'next/link'

import { FaUserFriends, FaHandPointRight } from 'react-icons/fa'
import { Button } from './ui/button'

const Collabs = () => {
  const urlCollab =
    'https://dcfrapzcynqcwwybaesu.supabase.co/storage/v1/object/public/assets/collabs/sethtwo/collab-sethtwo_00.png'

  return (
    <section className='w-full p-1 flex flex-col items-center gap-6 lg:mx-auto'>
      <div className='w-2/3 border-t border-slate-400 my-8 mx-auto md:w-1/3' />
      <h3 className='mb-4 text-2xl font-playfair font-semibold leading-none tracking-tight text-orange2 uppercase text-center lg:text-4xl'>
        <FaUserFriends className='inline mr-3 align-text-top pt-1' />
        Notre espace collab
      </h3>
      <Image
        src={urlCollab}
        alt='image collaboration'
        width='640'
        height='800'
        className='h-auto w-10/12 max-w-5xl skew-3 -rotate-3 md:w-4/6 lg:w-5/12'
      />
      <Button
        variant='outline'
        asChild
        className='border-orange2 p-3 font-playfair text-2xl text-orange2 hover:text-background hover:bg-orange2 md:p-6 md:text-3xl'
      >
        <Link href='/collabs' className='capitalize'>
          <FaHandPointRight className='mr-2 text-xl md:text-3xl' />
          Découvrez nos collabs
        </Link>
      </Button>
    </section>
  )
}

export default Collabs
