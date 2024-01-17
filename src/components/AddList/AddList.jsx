import React, { useState } from 'react'
import TextFiled from '../TextFiled'
import ButtonGourp from '../ButtonGroup'
import { postTodos } from '../../api/todos'

const AddList = ({ handleCencel, getTodosApi, deleteItems }) => {
    const [name, setName] = useState('')

    const handleClear = () => {
        setName('')
        handleCencel()
    }

    const saveTodo = async () => {
        try {
            const payload = { name: name }
            const response = await postTodos(payload)
            if (response.data.message === 'Succes') {
                getTodosApi()
                handleClear()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-[250px] h-[90px] bg-[#F9F7C9] rounded-md'>
            <div className="gap-2 flex flex-col">
                <TextFiled
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'Enter list title'}
                />

                <ButtonGourp
                    saveLabel={'Add List'}
                    handleCencel={handleCencel}
                    handleSave={() => saveTodo()}
                    className='px-1' />
            </div>
        </div>
    )
}

export default AddList