import React from 'react';
import './index.css';

const Input = ({
    placeholder,
    className,
    onChange,
    value,
    name,
    type
}) => {
    return (
        <input type={type}
            placeholder={placeholder}
            className={className}
            name={name}
            onChange={onChange}
            value={value}
            required>
        </input>
    )
}

export default Input;