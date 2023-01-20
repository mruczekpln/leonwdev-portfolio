import { useContext } from 'react'
import { Context } from '../App'

const Working = () => {
  const { scrollHeight } = useContext(Context)
  const width = scrollHeight > 6000 ? '0%' : '40%'

  return (
    <div className='sticky top-[580px]'>
      <div className='w-full flex items-center pb-8 '>
        <div
          style={{
            width: width,
          }}
          className={`h-1/2 border-b-2 border-slate-800 transition-all duration-500`}
        ></div>
        <h1 className={`font-serif min-w-max text-xl text-slate-900 rounded-md font-extrabold bg-slate-100 px-8 py-2`}>experience</h1>
        <div className={`w-full h-1/2 border-b-2 border-slate-800`}></div>
      </div>
      <div className='relative'>
        <p className='absolute top-0 text-base text-slate-300 blur-[5px] scale-[0.9]'>
          asd;kfjas, ipsum dolor sit amet consectetur adipisicing elit. Quisquam repudiandae non molestiae consectetur voluptate dignissimos suscipit nesciunt
          commodi sit quidem, dicta nemo, itaque ex aperiam repellendus laboriosam architecto? Consequuntur quisquam maxime ut aut delectus nostrum. Odio illum
          rem ullam omnis sapiente consectetur voluptas laudantium provident ratione minus? Molestias maiores suscipit quia corrupti ipsum veniam inventore
          dicta veritatis neque, assumenda labore voluptates atque, vel temporibus rem deleniti quo pariatur itaque voluptatum fugit. Consequatur esse
          reprehenderit sunt ab eum
        </p>
        <p className='z-10 p-8'>not much, coding mainly at home, participating in coding events and learning more and more.</p>
      </div>
    </div>
  )
}

export default Working
