const AboutMe = () => {
  return (
    <div className=''>
      <div className='w-full flex items-center pb-8 '>
        <div className={`w-[10%] h-1/2 border-b-2 border-slate-800`}></div>
        <h1 className={`min-w-max text-2xl text-slate-900 flex-grow rounded-md font-extrabold bg-slate-100 px-8 py-2`}>me</h1>
        <div className={`w-full h-1/2 border-b-2 border-slate-800`}></div>
      </div>
      <div className='flex text-slate-300 px-8'>
        <span className='text-[60px] inline leading-tight'>Hi!</span>
        <p className='text-base leading-relaxed inline'>
          im leon, 16, currently livin' in
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/2560px-Flag_of_Poland_%28normative%29.svg.png'
            alt='PL'
            className='w-8 ml-2 relative left-1 bottom-0.5 inline-block'
          />
          <span></span> having multiple hobbies, learning everything i possibly can. here i drop some information abt myself
        </p>
      </div>
    </div>
  )
}

export default AboutMe
