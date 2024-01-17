import React, { useCallback, useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import ButtonGourp from '../ButtonGroup'
import { postItems, getOneItems, updateItems } from '../../api/items'

const AddCard = ({
    getTodosApi,
    adding,
    cencel,
    todoId,
    itemId
}) => {
    const [name, setName] = useState('')

    const handleGetOneItem = useCallback(async () => {
        try {
            const response = await getOneItems(itemId)
            if (response.data.message === 'Succes') {
                setName(response.data.data.name)
            }
        } catch (error) {
            console.log(error)
        }
    }, [itemId]);

    useEffect(() => {
        handleGetOneItem()
    }, [handleGetOneItem])

    const handleOnchange = (e) => {
        setName(e.target.value)
    }

    const clear = () => {
        setName('')
        clear()
    }

    const handleSaveItem = async () => {
        try {
            const payload = {
                name: name,
                TodoId: todoId
            }

            const response = await postItems(payload)
            if (response.data.message === 'Succes') {
                getTodosApi()
                clear()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateItem = async () => {
        try {
            const payload = {
                name: name,
            }
            const response = await updateItems(itemId, payload)

            if (response.data.message === 'Succes') {
                getTodosApi()
                clear()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='h-[75px] bg-[#F9F7C9] w-full px-1 pt-2'>
            <TextareaAutosize
                name='name'
                value={name}
                onChange={handleOnchange}
                placeholder='add list you'
                autoFocus
                onClick={cencel}
                className='w-full rounded-md py-1 pl-2 focus:outline-none focus:ring focus:border-blue-500 resize-none'
            />

            <ButtonGourp
                saveLabel={adding ? 'Add List' : 'Edit List'}
                handleCencel={cencel}
                handleSave={() => {
                    adding ? handleSaveItem() : handleUpdateItem()
                }}
            />
        </div>
    )
}

export default AddCard