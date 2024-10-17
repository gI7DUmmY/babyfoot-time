import Link from 'next/link'
import {
  FaLinkedin,
  FaPhone,
  FaSquareFacebook,
  FaSquareInstagram,
  FaTiktok,
} from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const Socials = () => {
  return (
    <section className='mx-auto lg:max-w-7xl lg:my-12'>
      <div className='w-2/3 border-t border-slate-400 mx-auto md:w-1/3' />
      <div className='my-8 flex flex-row justify-evenly text-orange1 text-5xl animate-pulse lg:my-16'>
        <Link
          href='https://www.facebook.com/share/DARysEJ88uewvzE8/'
          target='_blank'
        >
          <FaSquareFacebook className='icon' />
        </Link>
        {/* <FaLinkedin className='icon' /> */}
        <Link
          href='https://www.instagram.com/babyfoot.time?igsh=MWlydWRsMGJlYWtpZw=='
          target='_blank'
        >
          <FaSquareInstagram className='icon' />
        </Link>
        <Link
          href='https://www.tiktok.com/@babyfoot.time?_t=8mmnjxR25w0&_r=1'
          target='_blank'
        >
          <FaTiktok className='icon' />
        </Link>
        <Link href='mailto:contact@babyfoot-time.fr'>
          <IoMdMail className='icon' />
        </Link>
        <Link href='tel:+33601844760'>
          <FaPhone className='icon' />
        </Link>
      </div>
      <div className='w-2/3 border-b border-slate-400 mx-auto md:w-1/3' />
    </section>
  )
}

export default Socials
