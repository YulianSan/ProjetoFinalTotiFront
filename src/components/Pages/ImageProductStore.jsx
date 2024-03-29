export function ImageProductStore({ data, column }) {
    return (
        <img
            src={data[column.label]}
            alt="image product"
            className="aspect-square w-full max-w-[10rem] object-contain
                rounded-xl overflow-hidden bg-white" />
    )
}
