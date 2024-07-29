import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-screen w-full bg-cover flex items-center justify-center">
        <div className="bg-green-700/40 backdrop-blur-sm rounded-md flex items-center flex-col justify-center px-20 py-10 space-y-5">
          <InputBox 
          label="From"
          amount = {amount}
          selectCurrency={from}
          onCurrencyChange={(currency)=>setFrom(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          options={options}
          />
          <div className="absolute top-[129px] bg-white rounded-sm"><button className='px-4 py-1' onClick={swap}>swap</button></div>
          <InputBox 
            label="To"
            amount = {convertedAmount}
            selectCurrency={to}
            onCurrencyChange={(currency)=>setTo(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            options={options}
            amountDisable='true'
          />
          <div>
            <button className='bg-white px-20 py-2 rounded-md text-lg font-bold' onClick={convert}>convert</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
