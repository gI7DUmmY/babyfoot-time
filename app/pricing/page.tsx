import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/ficheTarif'
import { FaCheck } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TiArrowBack } from 'react-icons/ti'

const page = () => {
  return (
    <section>
      <div className='pt-8 flex flex-col gap-2 px-2 md:items-center lg:flex-row lg:items-stretch lg:place-content-center'>
        {/* Coaching */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className='text-orange1'>Coaching</div>
              <div className='lining-nums'>100&euro;</div>
            </CardTitle>
            <CardDescription>
              Cours à domicile : initiation ou perferctionnement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />1 heure de
                coaching
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />1 joueur expert
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />1 table de
                compétition Bonzini (B90 ITSF)
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Frais de déplacement offerts dans un rayon de 50Km de Toulouse
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Tournoi */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className='text-orange1'>Tournoi</div>
              <div className='lining-nums'>750&euro;</div>
            </CardTitle>
            <CardDescription>
              Tournoi clé en main pour environ 30 personnes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />1 animateur
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />3 tables de
                compétition Bonzini (B90 ITSF)
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Acceuil-briefing-phase qualificative et phase finale-remise des
                prix
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Visite gratuite avant événement pour étude de faisabilité
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Entretien */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className='text-orange1'>Entretien</div>
              <div className='lining-nums'>100&euro;</div>
            </CardTitle>
            <CardDescription>
              Révision et entretien de votre baby-foot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Nettoyage du meuble
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Démontage et nettoyage en profondeur des barres et des joueurs
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Dégraissage du tapis
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Lubrification des barres
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Réalignement des joueurs
              </li>
              <li>
                <FaCheck className='inline text-orange1 mr-2' />
                Changement de pièces à envisager sur devis
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className='flex place-content-center mt-4'>
        <Button
          variant='outline'
          asChild
          className='border-orange2 p-3 font-playfair text-2xl text-orange2 hover:text-background hover:bg-orange2 md:p-6 md:text-4xl'
        >
          <Link href='/#maintenance'>
            <TiArrowBack className='mr-2 text-xl md:text-4xl' />
            Accueil
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default page
