import { createContext, useState } from 'react'
import Main from './layout/Main'
import ProgressBar from './layout/ProgressBar'

export const Context = createContext()
function App() {
  const [scrollHeight, setScrollHeight] = useState([0])

  const onScroll = (e) => {
    setScrollHeight(e.target.scrollTop)
  }

  return (
    <div className='App w-screen h-screen flex'>
      <Context.Provider value={{ scrollHeight }}>
        <div
          id='scrollable'
          onScroll={onScroll}
          // onLoad={getScrollHeight}
          className='w-full h-full overflow-y-scroll scrollbar-none scroll-smooth bg-text1'
        >
          <Main />
        </div>
        <ProgressBar />
      </Context.Provider>
    </div>
  )
}

export default App
