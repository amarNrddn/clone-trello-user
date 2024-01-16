import React, { useState } from 'react'
import Title from '../Title'
import TextFiled from '../TextFiled'
import { FaPlus } from "react-icons/fa6";

const Card = ({ todosApi }) => {
    const [editList, setEditList] = useState({
        status: false,
        id: '',
        name: ''
    })

    console.log(todosApi)
    // console.log('items')
    // console.lg(todosApi.Items)

    return (
        <>
            {todosApi.map((item, i) => {
                return (
                    <div key={i} className='w-[250px]  relative'>
                        {editList.status ? (

                            <TextFiled
                                name={'name'}
                                value={editList.name}
                                deleteList={() => null}
                                handleCencel={() => setEditList({ ...editList, status: false })}
                            />
                        ) : (

                            <Title onClick={() => setEditList({ ...editList, status: true })}>{item.name}</Title>
                        )}
                        {item.Items.map((list) => (
                            <div key={list.id} className='bg-[#F9F7C9]  px-2 py-2' >
                                <h2 className='shadow-md py-2 px-1 '>{list.name}</h2>
                            </div>
                        ))}

                        <button className='w-full flex items-center bg-[#AAD9BB] py-2 px-1 text-gray-500 gap-2'>< FaPlus />Add a Card</button>
                    </div>
                )

            })}
        </>
    )
}

export default Card