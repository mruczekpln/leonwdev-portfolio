import { useContext } from 'react'
import { Context } from '../App'

const Learning = () => {
  const { scrollHeight } = useContext(Context)
  const width = scrollHeight > 6000 ? '0%' : '60%'

  return (
    <div className='sticky top-[300px]'>
      <div className='flex items-center pb-8 '>
        <div
          style={{
            width: width,
          }}
          className={`h-1/2 border-b-2 bg-bg2 transition-all duration-500`}
        ></div>
        <h1 className={`font-serif min-w-max text-xl text-bg1 font-extrabold rounded-md px-8 py-2`}>knowledge</h1>
        <div className={`w-full h-1/2 border-b-2 border-bg2`}></div>
      </div>
      <div className='px-8 flex flex-col gap-4 text-base text-bg1'>
        <div className='flex h-16 px-6 items-center gap-4 rounded-lg outline outline-1 outline-bg1'>
          <h2 className='w-48 text-center text-[22px] leading-tight'>primary</h2>
          <div className='w-[2px] h-10 bg-bg2'></div>
          <p className='text-base w-full text-center leading-relaxed'>SP25 / ZE5, Zielona Góra, Poland</p>
        </div>
        <div className='flex h-16 px-6 items-center gap-4 text-text1 bg-bg1 rounded-lg'>
          <h2 className='w-48 text-center text-[22px] leading-tight'>middle</h2>
          <div className='w-[2px] h-10 bg-text1'></div>
          <p className='text-base w-full text-center leading-relaxed'>ZSEIS Elektronik Zielona Góra, 2nd Grade</p>
        </div>
      </div>
    </div>
  )
}

export default Learning
