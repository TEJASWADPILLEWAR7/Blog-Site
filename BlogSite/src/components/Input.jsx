import React, { useId } from 'react'

function Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {

    const id = useId


    return (
        <div className='w-full '>
            {label && (
                <label
                    htmlFor={id}
                    className='block text-sm font-medium text-gray-700'>{label}</label>
            )}
            <input
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                type="text"
                type={type}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input