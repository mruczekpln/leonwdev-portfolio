import { useContext } from 'react'
import { Context } from '../App'

const AboutMe = () => {
  const { scrollHeight } = useContext(Context)
  const width = scrollHeight > 6000 ? '0%' : '10%'

  return (
    <div className='sticky top-[100px]'>
      <div className='w-full flex items-center pb-8 '>
        <div
          style={{
            width: width,
          }}
          className={`h-1/2 border-b-2 transition-all duration-500`}
        ></div>
        <h1 className={`font-serif min-w-max text-2xl flex-grow rounded-md font-extrabold px-8 py-2`}>me</h1>
        <div className={`w-full h-1/2 border-b-2`}></div>
      </div>
      <div className='flex px-8'>
        <span className='text-[60px] inline leading-tight'>Hi!</span>
        <p className='text-base leading-relaxed inline'>
          im leon, 16, currently livin' in
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/2560px-Flag_of_Poland_%28normative%29.svg.png'
            alt='PL'
            className='w-8 ml-2 relative left-1 bottom-0.5 inline-block'
          />
          <span></span> having multiple hobbies, learning everything i possibly can. utilizing creativity as much as i can. currently focusing on mastering
          frontend themes. here some more information about me
          <span className='leading-none'>
            <span className='text-[14px]'>e</span>
            <span className='text-[12px]'>e</span>
            <span className='text-[10px]'>e</span>
            <span className='text-[8px]'>e</span>
            <span className='text-[6px]'>e</span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default AboutMe
