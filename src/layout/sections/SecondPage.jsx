import { useContext } from 'react'
import { Context } from '../../App'

import AboutMe from '../AboutMe'
import Learning from '../Learning'
import Working from '../Working'

const SecondPage = () => {
  const { scrollHeight } = useContext(Context)
  console.log(scrollHeight)
  const opacity = scrollHeight > 6800 ? '0' : '1'

  return (
    <div
      style={{
        opacity: opacity,
      }}
      className='w-full h-[450vh] flex flex-col gap-[100vh] transition-all duration-500 relative'
    >
      <AboutMe></AboutMe>
      <Learning></Learning>
      <Working></Working>
    </div>
  )
}

export default SecondPage
