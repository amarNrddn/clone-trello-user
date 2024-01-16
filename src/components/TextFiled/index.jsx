import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { MdDelete } from "react-icons/md";
import { HiOutlineX } from "react-icons/hi";

const TextFiled = ({ onChange, name, value, placeholder, className, deleteList, handleCencel }) => {
    return (
        <div className='flex items-center w-[250px] bg-[#F9F7C9] px-1 gap-1 rounded-md'>
            <TextareaAutosize
                autoFocus
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${deleteList ? 'w-[200px] rounded-md py-1 pl-2 focus:outline-none focus:ring focus:border-blue-500 resize-none' : 'w-full rounded-md py-1 pl-2 focus:outline-none focus:ring focus:border-blue-500 resize-none'} `}
            />
            {deleteList ?
                <>
                    <MdDelete onClick={deleteList} className='text-[17px] font-bold cursor-pointer' />
                    <HiOutlineX onClick={handleCencel} className='text-[17px] font-bold cursor-pointer'/>
                </>
                : ''}
        </div>
    )
}

export default TextFiled