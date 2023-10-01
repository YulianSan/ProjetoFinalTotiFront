export function TextArea({ register, name, id }) {
    return (
        <textarea
            className="py-3 px-4 w-full rounded-md"
            {...register(name ?? id)}
            id={id}>
        </textarea>
    )
}
