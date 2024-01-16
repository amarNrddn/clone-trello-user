import React from 'react'
import { HiOutlineX } from "react-icons/hi";

const ButtonGourp = ({ handleSave, handleCencel, saveLabel, className }) => {
    return (
        <div className='flex items-center gap-2 text-gray-700 pt-2 px-1'>
            <button
                onClick={handleSave}
                className='bg-[#80BCBD] rounded-md px-2 py-1' >
                {saveLabel}
            </button>
            <button
                className={className}
                onClick={handleCencel}>
                <HiOutlineX className='text-md font-bold' />
            </button>
        </div>
    )
}

export default ButtonGourp