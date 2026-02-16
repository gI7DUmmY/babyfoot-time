import { createClient } from '@/lib/supabase/server'
import { Suspense } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FaPeopleGroup } from 'react-icons/fa6'

const PartnersData = async () => {
  interface Partner {
    id: string
    nom: string
    logo_src: string
    url: string
  }
  const supabase = await createClient()
  const { data: partners } = await supabase
    .from('partners')
    .select()
    .order('nom', { ascending: true })

  return (
    <>
      {partners?.map((partner: Partner) => (
        <Link href={partner.url} target='_blank' key={partner.id}>
          <Image
            src={partner.logo_src}
            alt={partner.nom}
            width='447'
            height='677'
            className='h-auto w-28 md:w-36'
          />
        </Link>
      ))}
    </>
  )
}

const Partners = () => {
  return (
    <section className='w-full p-1 my-4 lg:mx-auto'>
      <div className='w-2/3 border-t border-slate-400 mb-8 mx-auto md:w-1/3' />
      <h3 className='mb-4 text-2xl font-playfair font-semibold leading-none tracking-tight text-orange2 uppercase text-center lg:text-4xl'>
        <FaPeopleGroup className='inline mr-3 align-text-top pt-1' />
        Nos partenaires
      </h3>
      <div className='w-full flex flex-row flex-wrap place-content-evenly items-center gap-4 lg:place-content-center lg:gap-12'>
        <Suspense fallback={<div>Loading instruments...</div>}>
          <PartnersData />
        </Suspense>
      </div>
    </section>
  )
}

export default Partners
