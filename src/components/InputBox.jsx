const InputBox = ()=>{
    return(
        <>
            <div className="bg-green-700 p-5 flex justify-between text-white rounded-md space-x-20">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="" className="text-gray-300 text-sm">From</label>
                    <input value={0} type="number" className="bg-transparent font-bold p-1 text-lg focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="" className="text-gray-300 text-sm">Currency Type</label>
                    <select name="" id="" className="bg-transparent font-bold p-1 text-lg">
                        <option value="">usd</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox