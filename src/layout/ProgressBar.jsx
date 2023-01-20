import { useContext } from 'react'
import { Context } from '../App'

const ProgressBar = () => {
  const { scrollHeight } = useContext(Context)
  const progress = parseInt((scrollHeight / 10000) * 100)
  let width = '0px'

  if (scrollHeight > 800) width = '50px'

  return (
    <div
      className='h-full transiion-[width] duration-1000 border-l-bg2 border-l-2'
      style={{
        width: width,
      }}
    >
      <div
        style={{ height: `${progress}%` }}
        className={`transition-all ease-out duration-150 w-full max-h-full bg-bg2`}
      ></div>
    </div>
  )
}

export default ProgressBar
