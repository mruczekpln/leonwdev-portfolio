import { useEffect, useMemo, useState } from 'react'
import Main from './layout/Main'
import ProgressBar from './layout/ProgressBar'

function App() {
  const [scrollHeight, setScrollHeight] = useState([0])

  const onScroll = (e) => {
    // const element = e.target
    console.log(e.target.scrollTop)
    // console.log(Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop))
    setScrollHeight(e.target.scrollTop)
  }

  return (
    <div className='App w-screen h-screen flex'>
      <div
        id='scrollable'
        onScroll={onScroll}
        // onLoad={getScrollHeight}
        className='w-[90%] h-full overflow-y-scroll scrollbar-none scroll-smooth bg-gray-800'
      >
        <Main scrollHeight={scrollHeight} />
      </div>
      <ProgressBar progress={parseInt((scrollHeight / 3900) * 100)} />
    </div>
  )
}

export default App
