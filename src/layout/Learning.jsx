const Learning = () => {
  return (
    <div className=''>
      <div className='w-full flex items-center pb-8 '>
        <div className={`w-2/3 h-1/2 border-b-2 border-slate-800`}></div>
        <h1 className={`min-w-max text-xl text-slate-900 font-extrabold rounded-md bg-slate-100 px-8 py-2`}>knowledge</h1>
        <div className={`w-1/3 h-1/2 border-b-2 border-slate-800`}></div>
      </div>
      <div className='px-8 flex flex-col gap-4 text-base text-slate-300'>
        <div className='flex h-16 px-6 items-center gap-4 rounded-lg outline outline-1 outline-slate-500'>
          <h2 className='w-48 text-center text-[22px] leading-tight'>primary</h2>
          <div className='w-[2px] h-10 bg-slate-300'></div>
          <p className='text-base w-full text-center leading-relaxed'>SP25 / ZE5, Zielona Góra, Poland</p>
        </div>
        <div className='flex h-16 px-6 items-center gap-4 bg-slate-500 rounded-lg'>
          <h2 className='w-48 text-center text-[22px] leading-tight'>middle</h2>
          <div className='w-[2px] h-10 bg-slate-300'></div>
          <p className='text-base w-full text-center leading-relaxed'>ZSEIS Elektronik Zielona Góra, 2nd Grade</p>
        </div>
      </div>
    </div>
  )
}

export default Learning
