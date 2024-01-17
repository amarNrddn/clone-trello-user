import React from 'react'
import { HiOutlineX } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

const ButtonGourp = ({ handleSave, handleDelet, handleCencel, saveLabel, className }) => {
    return (
        <div className='flex items-center gap-2 text-gray-700 px-1'>
            <button
                onClick={handleSave}
                className='bg-[#80BCBD] rounded-md px-2 py-1' >
                {saveLabel}
            </button>
            {handleDelet && (
                <button
                    className={className}
                    onClick={handleDelet}>
                    <MdDelete className='text-md font-bold' />
                </button>
            )}
            <button
                className={className}
                onClick={handleCencel}>
                <HiOutlineX className='text-md font-bold' />
            </button>
        </div>
    )
}

export default ButtonGourp