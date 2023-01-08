const ScrollSection = ({ scrollHeight }) => {
  const opacity = scrollHeight > 1000 ? 0 : 1

  return (
    <>
      <div
        style={{
          opacity: opacity,
        }}
        className='w-full h-screen top-0 sticky flex flex-col gap-4 items-center justify-center transition-all duration-700 ease-out'
      >
        <p>scroll down</p>
        <div className='scroll-animation relative'>
          <img
            src='https://icons.veryicon.com/png/o/miscellaneous/offerino-icons/arrow-up-45.png'
            alt='arrow-img'
            className='invert saturate-50 sepia rotate-180 w-8'
          />
        </div>
      </div>
      <div className='w-full h-[300vh]'></div>
    </>
  )
}

export default ScrollSection
