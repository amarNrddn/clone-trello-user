import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

const TextFiled = ({ onChange, name, value, placeholder, className }) => {
    return (
        <TextareaAutosize
            autoFocus
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
        />
    )
}

export default TextFiled