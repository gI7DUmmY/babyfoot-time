import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { IoBusiness, IoTimer } from 'react-icons/io5'
import { GiPalette, GiPartyPopper } from 'react-icons/gi'
import { FaHandshake, FaScrewdriverWrench } from 'react-icons/fa6'
import { BiSolidChevronsUp } from 'react-icons/bi'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaHandPointRight } from 'react-icons/fa'
import { Events } from './Events'

const Services = () => {
  return (
    <section>
      <div className='w-full p-3 flex place-content-center'>
        <Events />
      </div>
      <div className='w-full flex flex-col flex-wrap place-content-evenly lg:flex-row'>
        <Card className='max-w-prose'>
          <CardHeader>
            <CardTitle>
              <IoBusiness className='mx-auto' />
              pour votre entreprise
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>fédérer</li>
              <li>créer du lien</li>
              <li>communiquer</li>
              <li>challenger</li>
            </ul>
          </CardContent>
        </Card>

        <Card className='max-w-prose'>
          <CardHeader>
            <CardTitle>
              <GiPartyPopper className='mx-auto' /> pour vos soirées privées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>s'amuser</li>
              <li>favoriser les échanges</li>
              <li>se défouler</li>
              <li>partager</li>
            </ul>
          </CardContent>
        </Card>

        <Card className='max-w-prose'>
          <CardHeader>
            <CardTitle>
              <IoTimer className='mx-auto' />
              louez
            </CardTitle>
          </CardHeader>
          <CardContent className='md:px-24'>
            <p>
              une ou plusieurs tables bonzini b90 itsf (table officielle en
              compétition)
            </p>
          </CardContent>
        </Card>

        <Card className='max-w-prose'>
          <CardHeader>
            <CardTitle>
              <GiPalette className='mx-auto' />
              personnalisez
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>votre tournoi</li>
              <li>des défis</li>
              <li>des stages</li>
              <li>du freeplay</li>
            </ul>
          </CardContent>
        </Card>

        <Card className='max-w-prose'>
          <CardHeader>
            <CardTitle>
              <FaHandshake className='mx-auto' />
              nous gérons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>transport</li>
              <li>montage</li>
              <li>réglages</li>
              <li>démontage</li>
            </ul>
          </CardContent>
        </Card>

        <Card id='maintenance' className='max-w-prose'>
          <CardHeader>
            <CardTitle>
              <FaScrewdriverWrench className='mx-auto' />
              maintenance
            </CardTitle>
          </CardHeader>
          <CardContent className='md:px-20'>
            <p>entretien de vos baby-foots sur Toulouse et ses environs</p>
          </CardContent>
        </Card>

        <Card className='max-w-prose'>
          <CardHeader>
            <CardTitle>
              <BiSolidChevronsUp className='mx-auto' />
              Cours
            </CardTitle>
          </CardHeader>
          <CardContent className='md:px-20'>
            <p className='text-pretty'>
              un joueur expert se déplace à votre domicile avec un baby-foot
              pour une initiation ou un perfectionnement
            </p>
          </CardContent>
        </Card>
      </div>

      <div id='tarifs' className='flex place-content-center mt-3'>
        <Button
          variant='outline'
          asChild
          className='border-orange2 p-3 font-playfair text-2xl text-orange2 hover:text-background hover:bg-orange2 md:p-6 md:text-4xl'
        >
          <Link href='/pricing' className='capitalize'>
            <FaHandPointRight className='mr-2 text-xl md:text-4xl' />
            Consultez nos tarifs
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Services
