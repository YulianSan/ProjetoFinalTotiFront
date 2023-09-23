export function Label({ id, children }) {
    return (
        <label htmlFor={ id }>
            { children }
        </label>
    )
}
