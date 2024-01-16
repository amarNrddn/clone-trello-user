import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import AddList from '../AddList/AddList';

const Board = () => {
    const [togleIntup, setTogleInput] = useState(false)

    const togleTriger = () => {
        setTogleInput(!togleIntup)
        console.log(togleIntup)
    }
    return (
        <div className='w-[100%] h-[90vh] px-5 py-3 relative'>
            <button
                onClick={togleTriger}
                className="bg-[#AAD9BB] w-[200px] px-2 text-gray-600 font-semibold py-1 hover:bg-[#80BCBD] transition-all">
                {togleIntup ?
                    <AddList />
                    :
                    <h1 className='flex items-center gap-2 cursor-pointer'>
                        <FaPlus /> Add a List
                    </h1>

                }
            </button>
        </div>
    )
}

export default Board