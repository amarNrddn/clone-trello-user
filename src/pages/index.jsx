import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Board from '../components/Board/Board'
import Card from '../components/Card'
import { getTodos } from '../api/todos'

const Pages = () => {
    const [todos, setTodos] = useState([])

    const getTodosApi = async () => {
        try {
            const response = await getTodos()

            response.data.data.forEach(res => {
                res.status = false
                res.Items.forEach((item) => {
                    item.isEdit = false
                })
            })

            setTodos(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTodosApi()
    }, [setTodos])

    return (
        <div className='h-[100vh] w-[100%] bg-[#D5F0C1]'>
            <Header>MARZKYY LIST</Header>
            <div className="w-[100%] h-[90vh] px-5 py-3 relative flex gap-2 overflow-x-auto">
                <Card todosApi={todos} getTodosApi={getTodosApi} />
                <Board getTodosApi={getTodosApi} />
            </div>
        </div>
    )
}

export default Pages