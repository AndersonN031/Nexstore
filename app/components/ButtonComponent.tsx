import React from 'react'

type ButtonProps = {
    title: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className='btn-component'>
            {title}
        </button>
    )
}

export default Button