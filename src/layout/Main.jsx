import ScrollSection from './sections/Scroll'
import InfoSection from './sections/Info'

const Main = ({ scrollHeight }) => {
  return (
    <div className='flex flex-col m-auto w-3/5 min-h-screen text-white'>
      <ScrollSection scrollHeight={scrollHeight}></ScrollSection>
      <InfoSection></InfoSection>
    </div>
  )
}

export default Main
