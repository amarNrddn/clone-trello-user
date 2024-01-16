import React from 'react'

const Header = ({ children }) => {
    return (
        <div className='bg-[#D5F0C1]' >
            <h1 className='py-2 pl-5 text-xl font-bold text-gray-500'>{children}</h1>
        </div>
    )
}

export default Header