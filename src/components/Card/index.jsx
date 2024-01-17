import React, { useEffect, useState } from 'react'
import Title from '../Title'
import TextFiled from '../TextFiled'
import { FaPlus } from "react-icons/fa6";
import { getOneTodos, updateTodos, deleteTodos } from '../../api/todos';
import AddCard from '../AddCard';
import { MdModeEdit } from "react-icons/md";

const Card = ({ todosApi, getTodosApi }) => {
    const [editList, setEditList] = useState({
        status: false,
        id: '',
        name: ''
    })

    const [card, setCard] = useState([])
    const [todoId, setTodoId] = useState(null)
    const [itemId, setItemId] = useState(null)
    const [hover, setHover] = useState(null)

    useEffect(() => {
        setCard(todosApi)
    }, [todosApi])

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

    const handleDelet = async (id) => {
        try {
            const response = await deleteTodos(id)

            if (response.data.message === 'Succes') {
                getTodosApi()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const togleAddCard = (id) => {
        const _temp = [...card]
        _temp.forEach(card => {
            if (card.id === id) {
                card.status = !card.status
            }
        })
        setCard(_temp)
        setTodoId(id)
    }

    const handleEditItem = async (todoId, itemId) => {
        const _temp = [...card]

        _temp.forEach((card) => {
            if (card.id === todoId) {
                card.Items.forEach((item) => {
                    if (item.id === itemId) {
                        item.isEdit = !item.isEdit
                    }
                })
            }
        })
        setCard(_temp)
        setTodoId(todoId)
        setItemId(itemId)
    }

    return (
        <>
            {card.map((item, i) => {
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
                            <React.Fragment key={list.id} >
                                {!list.isEdit ? (
                                    <div
                                        key={list.id}
                                        className='bg-[#F9F7C9]  px-2 py-2 '
                                        onMouseEnter={() => setHover(list.id)}
                                        onMouseLeave={() => setHover(null)}
                                    >
                                        <h2 className='shadow-md py-2 px-1 flex w-full items-center justify-between '>
                                            {list.name}
                                            {hover === list.id && (
                                                <MdModeEdit
                                                    className='cursor-pointer'
                                                    onClick={() => handleEditItem(item.id, list.id)}
                                                />
                                            )}
                                        </h2>
                                    </div>
                                ) : (
                                    <AddCard
                                        getTodosApi={getTodosApi}
                                        itemId={itemId}
                                        todoId={todoId}
                                        cencel={() => handleEditItem(item.id, list.id)}
                                        className='pt-2'
                                    />
                                )}

                            </React.Fragment >
                        ))}

                        {item.status
                            ?
                            <AddCard
                                getTodosApi={getTodosApi}
                                adding
                                todoId={todoId}
                                cencel={() => togleAddCard(item.id)}
                            />
                            :
                            <button
                                onClick={() => togleAddCard(item.id)}
                                className='w-full flex items-center bg-[#AAD9BB] py-2 px-1 text-gray-500 gap-2'
                            >
                                < FaPlus />
                                Add a Card
                            </button>
                        }
                    </div>
                )

            })}
        </>
    )
}

export default Card