import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const About = () => {
  return (
    <section className='w-full flex flex-col justify-center gap-2 p-1 my-4'>
      <h3 className='text-2xl font-playfair font-semibold leading-none tracking-tight text-orange2 uppercase text-center lg:text-4xl'>
        qui sommes-nous ?
      </h3>
      <div className='px-10 text-center font-lora max-w-5xl mx-auto lg:text-2xl'>
        <p className='my-4'>
          Le temps passé à jouer au baby-foot au collège et au lycée m'a permis
          d'intégrer très tôt la compétition. D'être sacré meilleur jeune de
          France et champion de France junior puis champion de France par équipe
          avec le club de Toulouse.
        </p>
        <p>
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
    </section>
  )
}

export default About
