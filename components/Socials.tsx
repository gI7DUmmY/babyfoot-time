import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaTiktok,
} from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

export const Socials = () => {
  return (
    <section className='mx-auto lg:max-w-7xl lg:my-12'>
      <div className='w-1/3 border-t border-slate-400 mx-auto' />
      <div className='my-8 flex flex-row justify-evenly text-orange1 text-5xl lg:my-16'>
        <FaSquareFacebook className='cursor-pointer' />
        <FaLinkedin className='cursor-pointer' />
        <FaSquareInstagram className='cursor-pointer' />
        <FaTiktok className='cursor-pointer' />
        <IoMdMail className='cursor-pointer' />
      </div>
      <div className='w-1/3 border-b border-slate-400 mx-auto' />
    </section>
  )
}
