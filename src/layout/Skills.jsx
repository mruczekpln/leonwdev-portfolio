import SkillItem from './SkillItem'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })
  console.log(inView)

  return (
    <div className='w-3/5 h-full flex flex-col justify-start items-center sticky top-[100px] py-[100px] gap-8'>
      <div
        ref={ref}
        className='w-full max-h-min flex justify-center gap-8 sticky top-[100px]'
      >
        <div
          style={{
            width: inView ? '100%' : '0%',
          }}
          className={`max-w-full h-1/2 border-b-2 transition-all duration-700 delay-300 ease-in-out`}
        ></div>
        <h1 className=' font-serif text-2xl font-extrabold text-primary bg-bg1 rounded-xl w-max h-min min-w-max px-4'>Tech Skills</h1>
        <div
          style={{
            width: inView ? '100%' : '0%',
          }}
          className={`max-w-full h-1/2 border-b-2 transition-all duration-700 delay-300 ease-in-out`}
        ></div>
      </div>
      <div className='w-full h-1/2 grid gap-4 grid-cols-3 row-auto autofill'>
        <SkillItem
          imgUrl=''
          text='html'
        ></SkillItem>
        <SkillItem
          imgUrl=''
          text='css'
        ></SkillItem>
        <SkillItem
          imgUrl=''
          text='javascript'
        ></SkillItem>
      </div>
    </div>
  )
}

export default Skills
