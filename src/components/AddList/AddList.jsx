import React, { useState } from 'react'
import TextFiled from '../TextFiled'
import ButtonGourp from '../ButtonGroup'

const AddList = ({handleCencel}) => {
    const [name, setName] = useState('')

    return (
        <div className='w-[250px] h-[90px] bg-[#F9F7C9] rounded-md'>
            <TextFiled
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={'Enter list title'}
            />
            <ButtonGourp saveLabel={'Add List'} handleCencel={handleCencel} className='px-1' />
        </div>
    )
}

export default AddList