import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {

  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-screen w-full bg-cover flex items-center justify-center">
        <div className="bg-green-700/40 backdrop-blur-sm rounded-md flex items-center flex-col justify-center px-20 py-10 space-y-5">
          <InputBox />
          <div className="absolute top-[129px] bg-white rounded-sm"><button className='px-4 py-1'>swap</button></div>
          <InputBox />
          <div>
            <button className='bg-white px-20 py-2 rounded-md text-lg font-bold'>convert</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
