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

const Services = () => {
  return (
    <section>
      <div className='w-full flex flex-col flex-wrap place-content-evenly lg:flex-row'>
        <Card>
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

        <Card>
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

        <Card>
          <CardHeader>
            <CardTitle>
              <IoTimer className='mx-auto' />
              louez
            </CardTitle>
          </CardHeader>
          <CardContent className='px-20'>
            <p>
              une ou plusieurs tables bonzini b90 itsf <br /> (table officielle
              en compétition)
            </p>
          </CardContent>
        </Card>

        <Card>
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

        <Card>
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

        <Card>
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

        <Card>
          <CardHeader>
            <CardTitle>
              <BiSolidChevronsUp className='mx-auto' />
              Cours
            </CardTitle>
          </CardHeader>
          <CardContent className='px-20'>
            <p>
              un joueur expert se déplace à votre domicile avec un baby-foot
              pour une initiation ou un perfectionnement
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Services
