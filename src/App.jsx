import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  return (
    <>
      <div className="text-red-400">Hello</div>
      {useCurrencyInfo('inr')}
    </>
  )
}

export default App
