import { PiQuestionFill } from 'react-icons/pi'
import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { PiNumberCircleFourFill } from 'react-icons/pi'
import { PiNumberCircleFiveFill } from 'react-icons/pi'
import { PiNumberCircleSixFill } from 'react-icons/pi'
import { PiNumberCircleSevenFill } from 'react-icons/pi'
import { PiNumberCircleEightFill } from 'react-icons/pi'
import { PiNumberCircleNineFill } from 'react-icons/pi'

interface Props {
  num: number
}

const PastilleEvents = ({ num }: Props) => {
  return num === 1 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleOneFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleOneFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : num === 2 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleTwoFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleTwoFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : num === 3 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleThreeFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleThreeFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : num === 4 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleFourFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleFourFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : num === 5 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleFiveFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleFiveFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : num === 6 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleSixFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleSixFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : num === 7 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleSevenFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleSevenFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : num === 8 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleEightFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleEightFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : num === 9 ? (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiNumberCircleNineFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiNumberCircleNineFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  ) : (
    <span className='absolute flex h-6 w-6 -top-3 -right-4'>
      <PiQuestionFill className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange1 opacity-75' />
      <PiQuestionFill className='relative inline-flex rounded-full h-6 w-6 group-hover:text-orange1' />
    </span>
  )
}

export default PastilleEvents
