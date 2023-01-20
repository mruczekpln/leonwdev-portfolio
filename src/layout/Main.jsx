import FirstPage from './sections/FirstPage'
import SecondPage from './sections/SecondPage'
import ThirdPage from './sections/ThirdPage'

const Main = () => {
  return (
    <>
      <div className='flex flex-col m-auto w-3/5 min-h-screen text-bg1'>
        <FirstPage></FirstPage>
        <SecondPage></SecondPage>
      </div>
      <ThirdPage></ThirdPage>
    </>
  )
}

export default Main
