import React, { useState } from 'react'
import Title from '../Title'
import TextFiled from '../TextFiled'
import { FaPlus } from "react-icons/fa6";
import { getOneTodos, updateTodos, deleteTodos } from '../../api/todos';

const Card = ({ todosApi, getTodosApi }) => {
    const [editList, setEditList] = useState({
        status: false,
        id: '',
        name: ''
    })

    const togleEditList = async (id, status) => {
        try {
            const response = await getOneTodos(id)
            if (response.data.message === 'Succes') {
                setEditList({
                    ...setEditList,
                    status: status,
                    id: response.data.data.id,
                    name: response.data.data.name
                })
            }
        } catch (error) {

        }
    }

    const handleEditList = async (e, id) => {
        try {
            if (e.keyCode === 13) {
                const payload = { name: editList.name }
                const response = await updateTodos(id, payload)

                if (response.data.message === 'Succes') {
                    setEditList({
                        ...setEditList,
                        status: false,
                        id: '',
                        name: ''
                    })
                    getTodosApi()
                }
            }
        } catch (error) {

        }
    }

    const handleOnchange = (e) => {
        setEditList({ ...editList, [e.target.name]: e.target.value })
    }

    const handleDelet = async(id) => {
        try {
            const response = await deleteTodos(id)

            if(response.data.message === 'Succes'){
                getTodosApi()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {todosApi.map((item, i) => {
                return (
                    <div key={i} className='w-[250px]  relative'>
                        {editList.status && editList.id === item.id ? (

                            <TextFiled
                                name={'name'}
                                value={editList.name}
                                onChange={handleOnchange}
                                onKeyUp={(e) => handleEditList(e, editList.id)}
                                handleCencel={() => setEditList({ ...editList, status: false })}
                                deleteList={() => handleDelet(editList.id)}
                            />
                        ) : (

                            <Title onClick={() => togleEditList(item.id, true)}>{item.name}</Title>
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