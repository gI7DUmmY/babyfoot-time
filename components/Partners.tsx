import Image from 'next/image'
import Link from 'next/link'
import { FaPeopleGroup } from 'react-icons/fa6'

const Partners = () => {
  return (
    <section className='w-full p-1 my-4 lg:mx-auto'>
      <div className='w-2/3 border-t border-slate-400 mb-8 mx-auto md:w-1/3' />
      <h3 className='mb-4 text-2xl font-playfair font-semibold leading-none tracking-tight text-orange2 uppercase text-center lg:text-4xl'>
        <FaPeopleGroup className='inline mr-3 align-text-top pt-1' />
        Nos partenaires
      </h3>
      <div className='w-full flex flex-row place-content-evenly lg:place-content-center lg:gap-32'>
        <Link href='https://aufutetamesure.fr/' target='blank'>
          <Image
            src='https://dcfrapzcynqcwwybaesu.supabase.co/storage/v1/object/public/assets//logo_fut.png'
            alt='logo fut'
            width='447'
            height='677'
            className='h-28 w-auto md:h-36'
          />
        </Link>
        <Link href='https://www.b29toulouse.fr/' target='blank'>
          <Image
            src='https://dcfrapzcynqcwwybaesu.supabase.co/storage/v1/object/public/assets//logo_b29.webp'
            alt='logo b29'
            width='512'
            height='512'
            className='h-28 w-auto md:h-36'
          />
        </Link>
      </div>
    </section>
  )
}

export default Partners
