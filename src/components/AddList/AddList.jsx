import React, { useState } from 'react'
import TextFiled from '../TextFiled'

const AddList = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <TextFiled
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={'Enter list title'}
                className={'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 resize-none '}
            />
        </div>
    )
}

export default AddList