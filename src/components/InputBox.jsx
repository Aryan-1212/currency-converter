import {useId} from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = 'usd',
    options = [],
    amountDisable = false
}) => {

    const labelId = useId()

    return (
        <>
            <div className="bg-green-700 p-5 flex justify-between text-white rounded-md space-x-20">
                <div className="flex flex-col space-y-5">
                    <label htmlFor={labelId} className="text-gray-300 text-sm">{label}</label>
                    <input value={amount} type="number" id={labelId} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} className="bg-transparent font-bold p-1 text-lg focus:outline-none" min={0} disabled={amountDisable} />
                </div>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="" className="text-gray-300 text-sm">Currency Type</label>
                    <select name="" id="" value={selectCurrency} className="bg-transparent font-bold p-1 text-lg focus:bg-green-700 focus:outline-none" onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                        {options.map((val) => (
                            <option key={val} value={val}>{val}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox