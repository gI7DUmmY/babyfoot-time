import Titre from '@/components/Titre'
import Services from '@/components/Services'
import About from '@/components/About'
import Feedback from '@/components/Feedback'
import Partners from '@/components/Partners'

export default function Home() {
  return (
    <div className='select-none'>
      <Titre />

      <Services />

      <About />

      <Partners />

      <Feedback />
    </div>
  )
}
