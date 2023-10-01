import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export function ButtonEdit({ to }) {
    return (
        <Link
            to={to}
            className="inline-block bg-blue-500 text-white p-3 text-2xl rounded-xl"
        >
            <AiFillEdit />
        </Link>
    )
}
