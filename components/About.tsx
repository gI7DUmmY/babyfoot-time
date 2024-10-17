import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Laurent from '@/public/assets/images/laurent.png'

const About = () => {
  return (
    <section className='w-full flex flex-col justify-center gap-2 p-1 my-4'>
      <h3 className='mb-4 text-2xl font-playfair font-semibold leading-none tracking-tight text-orange2 uppercase text-center lg:text-4xl'>
        qui sommes-nous ?
      </h3>

      <div className='px-10 text-center font-lora max-w-5xl mx-auto lg:text-2xl'>
        <p>
          Le temps passé à jouer au baby-foot au collège et au lycée m'a permis
          d'intégrer très tôt la compétition. D'être sacré meilleur jeune de
          France et champion de France junior puis champion de France par équipe
          avec le club de Toulouse.
        </p>
        <p className='my-4'>
          Habitué à coacher, fédérer et animer grâce à plus de 15 ans
          d'expérience de coach sportif et ayant repris la compétition à haut
          niveau au sein du club{' '}
          <Link
            href='https://www.toulouseft.fr/'
            target='_blank'
            className='lien-ext'
          >
            <FaExternalLinkAlt className='inline mx-1 text-xs align-baseline' />
            Toulouse Football de Table
          </Link>{' '}
          depuis quelques années, j'ai aujourd'hui à coeur de partager ma
          passion et promouvoir ainsi le baby-foot sportif et loisir au travers
          d'animations personnalisées conviviales.
        </p>
      </div>

      <div className='px-10 text-center font-lora max-w-5xl mx-auto lg:text-2xl'>
        <figure className='md:flex bg-gray-900 rounded-xl p-8 md:p-0'>
          <Image
            className='w-24 h-24 md:w-48 md:h-48 md:rounded-none rounded-full mx-auto my-auto'
            src={Laurent}
            alt='laurent fargues'
            width='776'
            height='776'
          />
          <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
            <blockquote>
              <p className='text-lg font-medium'>
                “Le baby-foot est une activité mixte, intergénérationnelle,
                ludique, originale et conviviale favorisant les échanges et le
                partage. It's time to play !”
              </p>
            </blockquote>
            <figcaption className='font-medium'>
              <div className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange2 to-orange1'>
                Laurent Fargues
              </div>
              <div className='text-slate-500'>Dirigeant, Babyfoot-Time</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default About
