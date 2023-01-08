import AboutMe from '../AboutMe'
import Learning from '../Learning'
import Working from '../Working'

const InfoSection = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-8'>
      <AboutMe></AboutMe>
      <Learning></Learning>
      <Working></Working>
    </div>
  )
}

export default InfoSection
