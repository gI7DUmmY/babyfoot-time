import Link from 'next/link'
import Image from 'next/image'
import notFound from '/public/assets/images/404.svg'

export default function NotFound() {
  return (
    <div className='w-screen h-screen p-2 select-none text-center text-orange2 flex flex-col items-center justify-center'>
      <h1 className='uppercase font-display text-3xl lg:text-6xl'>
        oups page introuvable
      </h1>
      <Image
        src={notFound}
        alt='page not found'
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='mx-auto'
      />
      <p>
        <Link
          href='/'
          className='uppercase animate-pulse font-playfair text-3xl lg:text-6xl'
        >
          Revenez à l'accueil
        </Link>
      </p>
    </div>
  )
}
