import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaTiktok,
} from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const Socials = () => {
  return (
    <section className='mx-auto lg:max-w-7xl lg:my-12'>
      <div className='w-1/3 border-t border-slate-400 mx-auto' />
      <div className='my-8 flex flex-row justify-evenly text-orange1 text-5xl animate-pulse lg:my-16'>
        <FaSquareFacebook className='icon' />
        <FaLinkedin className='icon' />
        <FaSquareInstagram className='icon' />
        <FaTiktok className='icon' />
        <IoMdMail className='icon' />
      </div>
      <div className='w-1/3 border-b border-slate-400 mx-auto' />
    </section>
  )
}

export default Socials
