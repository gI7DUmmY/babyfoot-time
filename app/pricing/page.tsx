import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FaCheck } from 'react-icons/fa'

const page = () => {
  return (
    <section className='pt-8 flex flex-col gap-2 px-2 md:items-center lg:flex-row lg:items-stretch lg:place-content-center'>
      {/* Initiation */}
      <Card className='border border-muted-foreground rounded-lg bg-secondary-foreground text-muted-foreground md:max-w-lg lg:max-w-xs'>
        <CardHeader>
          <CardTitle className='group-hover:scale-100 font-playfair font-bold text-xl text-orange2 capitalize text-left flex flex-row flex-wrap justify-between lg:flex-col lg:place-content-center lg:text-center'>
            <div>Initiation</div>
            <div className='lining-nums'>150&euro;</div>
          </CardTitle>
          <CardDescription className='mt-2 mb-4 text-base text-muted-foreground'>
            Présentation des règles et des techniques de babyfoot dans leur
            globalité puis mise en pratique
          </CardDescription>
        </CardHeader>
        <CardContent className='text-left text-base normal-case text-foreground'>
          <ul>
            <li>
              <FaCheck className='inline text-orange1' /> pour 1 à 4 personnes
            </li>
            <li>
              <FaCheck className='inline text-orange1' /> déplacement sur le
              lieu de votre choix
            </li>
            <li>
              <FaCheck className='inline text-orange1' /> 1 table de compétition
              Bonzini louée
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Perfectionnement */}
      <Card className='border border-muted-foreground rounded-lg bg-secondary-foreground text-muted-foreground md:max-w-lg lg:max-w-xs'>
        <CardHeader>
          <CardTitle className='transition-none group-hover:scale-100 font-playfair font-bold text-xl text-orange2 capitalize text-left flex flex-row flex-wrap justify-between lg:flex-col lg:place-content-center lg:text-center'>
            <div className='lg:text-center'>Perfectionnement</div>
            <div className='lining-nums'>250&euro;</div>
          </CardTitle>
          <CardDescription className='mt-2 mb-4 text-base text-muted-foreground'>
            &Eacute;valuation de niveau et mise en place d'un programme de
            perfectionnement personnalisé
          </CardDescription>
        </CardHeader>
        <CardContent className='text-left text-base normal-case text-foreground'>
          <ul>
            <li>
              <FaCheck className='inline text-orange1' /> pour 1 personne
            </li>
            <li>
              <FaCheck className='inline text-orange1' /> déplacement sur le
              lieu de votre choix
            </li>
            <li>
              <FaCheck className='inline text-orange1' /> 1 table de compétition
              Bonzini louée
            </li>
            <li>
              <FaCheck className='inline text-orange1' /> coaching par un joueur
              de compétition
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Animation */}
      <Card className='border border-muted-foreground rounded-lg bg-secondary-foreground text-muted-foreground md:max-w-lg lg:max-w-xs'>
        <CardHeader>
          <CardTitle className='group-hover:scale-100 font-playfair font-bold text-xl text-orange2 capitalize text-left flex flex-row flex-wrap justify-between lg:flex-col lg:place-content-center lg:text-center'>
            <div className='lg:text-center'>Animation</div>
            <div className='lining-nums'>550&euro;</div>
          </CardTitle>
          <CardDescription className='mt-2 mb-4 text-base text-muted-foreground'>
            Premier contact pour definir un programme personnalisé adapté a vos
            besoins
          </CardDescription>
        </CardHeader>
        <CardContent className='text-left text-base normal-case text-foreground'>
          <ul>
            <li>
              <FaCheck className='inline text-orange1' /> jusqu'à 50 personnes
            </li>
            <li>
              <FaCheck className='inline text-orange1' /> déplacement sur le
              lieu de votre choix
            </li>
            <li>
              <FaCheck className='inline text-orange1' /> jusqu'à 5 tables de
              compétition Bonzini louées
            </li>
            <li>
              <FaCheck className='inline text-orange1' /> organisation complète
              d'un tournoi ou de parties libres
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

export default page
