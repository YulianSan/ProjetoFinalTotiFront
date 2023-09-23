export function ErrorValidate({ children }) {
    return (
        <>
            { children && <span className="text-red-500"> { children } </span> }
        </>
    )
}
