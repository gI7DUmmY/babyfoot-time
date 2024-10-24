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

const Services = () => {
  return (
    <section className='w-full flex flex-col justify-center gap-2 p-1 md:grid md:grid-cols-2 lg:gap-6 lg:p-6 2xl:grid-cols-6'>
      <Card className='2xl:col-span-2'>
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

      <Card className='2xl:col-span-2'>
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

      <Card className='2xl:col-span-2'>
        <CardHeader>
          <CardTitle>
            <IoTimer className='mx-auto' />
            louez
          </CardTitle>
        </CardHeader>
        <CardContent className='px-20'>
          <p>
            une ou plusieurs tables bonzini b90 itsf <br /> (table officielle en
            compétition)
          </p>
        </CardContent>
      </Card>

      <Card className='2xl:col-span-3 2xl:pl-60'>
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

      <Card className='2xl:col-span-3 2xl:pr-60'>
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

      <Card className='2xl:col-span-6'>
        <CardHeader>
          <CardTitle>
            <FaScrewdriverWrench className='mx-auto' />
            maintenance
          </CardTitle>
        </CardHeader>
        <CardContent className='px-20'>
          <p>
            entretien de vos baby-foots
            <br />
            sur Toulouse et ses environs
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

export default Services
