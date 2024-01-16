import React from 'react'

const Title = ({ onClick, children }) => {
    return (
        <div
            onClick={onClick}
            className="w-[250px] px-2 text-gray-600 font-semibold py-1 bg-[#80BCBD] transition-all">
            {children}
        </div>
    )
}

export default Title