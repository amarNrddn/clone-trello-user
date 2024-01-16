import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import AddList from '../AddList/AddList';

const Board = () => {
    const [togleIntup, setTogleInput] = useState(false)

    return (
        <div className=''>
            {togleIntup ?
                <AddList handleCencel={() => setTogleInput(false)} />
                :
                <button
                    onClick={() => setTogleInput(true)}
                    className="bg-[#AAD9BB] w-[250px] px-2 text-gray-600 font-semibold py-1 hover:bg-[#80BCBD] transition-all">
                    <h1 className='flex items-center gap-2 cursor-pointer'>
                        <FaPlus /> Add a List
                    </h1>
                </button>
            }
        </div>
    )
}

export default Board