import { useInView } from 'react-intersection-observer'

import Skills from '../Skills'

const ThirdPage = () => {
  return (
    <div className='relative w-full h-[200vh] bg-primary flex flex-col items-center'>
      <Skills></Skills>
    </div>
  )
}

export default ThirdPage
