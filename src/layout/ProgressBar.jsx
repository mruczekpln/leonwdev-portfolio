const ProgressBar = ({ progress }) => {
  return (
    <div className='w-[10%] h-full bg-gray-900'>
      <div
        style={{ height: `${progress}%` }}
        className={`transition-all ease-out duration-150 w-full max-h-full bg-slate-500`}
      ></div>
    </div>
  )
}

export default ProgressBar
