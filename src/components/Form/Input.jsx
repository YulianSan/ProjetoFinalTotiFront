export function Input({ type, id, register, name }) {
    return (
        <input 
            className="py-3 px-4 w-full rounded-md"
            type={ type }
            {...register(name ?? id)}
            id={ id } />
    )
}

Input.defaultProps = {
    type: 'text'
}
