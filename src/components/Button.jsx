export function Button({ click, children, type, ...rest }) {
    return (
        <button
            onClick={click}
            type={type}
            {...rest}
            className='bg-red-500 text-white px-6 font-bold rounded-md py-2 
                w-full text-center flex justify-center my-4 disabled:bg-red-400'>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button'
}
