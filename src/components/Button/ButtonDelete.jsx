import { AiFillDelete } from 'react-icons/ai'

export function ButtonDelete({ click }) {
    return (
        <button
            onClick={click}
            className="bg-red-500 text-white p-3 text-2xl rounded-xl"
        >
            <AiFillDelete />
        </button>
    )
}
