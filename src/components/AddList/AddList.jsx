import React, { useState } from 'react'
import TextFiled from '../TextFiled'
import ButtonGourp from '../ButtonGroup'
import axios from 'axios'

const AddList = ({ handleCencel, }) => {
    const [name, setName] = useState('')

    const saveTodo = async () => {
        try {
            const payload = { name: name }
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/todos`, payload)
            if(response.data.message === 'Succes') {

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-[250px] h-[90px] bg-[#F9F7C9] rounded-md'>
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
                handleSave={saveTodo}
                className='px-1' />
        </div>
    )
}

export default AddList