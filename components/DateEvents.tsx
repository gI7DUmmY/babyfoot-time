import Link from 'next/link'

import Event from '@/types/Event'
import { GiClick } from 'react-icons/gi'

interface Props {
  events: Event[]
}

const DateEvents = ({ events }: Props) => {
  return events.length === 0 ? (
    // paragraphe a decommenter :
    // <p className='text-center'>Ici nos prochaines dates à venir !</p>
    //
    //
    // paragraphe temporaire fete du jeu
    <p>
      14/11/2026 de 10h à 20h <span className='hidden md:inline'>:</span>
      <br className='md:hidden' /> À St Sulpice{' '}
      <br className='md:hidden' />
      <Link
        href='https://maps.app.goo.gl/hEKEE5rzXWZGVEoX8'
        target='_blank'
        className='ml-2 p-1 font-playfair text-xl text-orange2 animate-pulse hover:text-background hover:bg-orange2 hover:rounded-2xl lg:text-3xl'
      >
        Itinéraire
        <GiClick className='ml-2 inline align-middle' />
      </Link>
    </p>
    // fin paragraphe temporaire
  ) : (
    <>
      {events.length > 0 && (
          <ul className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
            {events.map((data: Event) => {
              const localDate = new Date(data.date).toLocaleString('fr-FR', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Europe/Paris'
              })

              return (
                <li key={data.id}>
                  {localDate} <span className='hidden md:inline'>:</span>
                  <br className='md:hidden' /> {data.lieu}{' '}
                  <br className='md:hidden' />
                  <Link
                    href={data.link}
                    target='_blank'
                    className='ml-2 p-1 font-playfair text-xl text-orange2 animate-pulse hover:text-background hover:bg-orange2 hover:rounded-2xl lg:text-3xl'
                  >
                    Je m'inscris !
                    <GiClick className='ml-2 inline align-middle' />
                  </Link>
                </li>
              )
            })}

            {/* ajout temporaire fete du jeu*/}
            <li>
              14/11/2026 de 10h à 20h <span className='hidden md:inline'>:</span>
              <br className='md:hidden' /> À St Sulpice{' '}
              <br className='md:hidden' />
              <Link
                href='https://maps.app.goo.gl/hEKEE5rzXWZGVEoX8'
                target='_blank'
                className='ml-2 p-1 font-playfair text-xl text-orange2 animate-pulse hover:text-background hover:bg-orange2 hover:rounded-2xl lg:text-3xl'
              >
                Itinéraire
                <GiClick className='ml-2 inline align-middle' />
              </Link>
            </li>
            {/* fin ajout temporaire */}
          </ul>
      )}
    </>
  )
}

export default DateEvents
