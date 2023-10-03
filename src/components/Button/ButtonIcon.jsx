import { Link } from "react-router-dom";

export function ButtonIcon({ children, to }) {
    return (
        <Link
            to={to}
            className="bg-blue-500 items-center gap-2 text-white py-3 px-8 rounded-lg flex"
        >
            {children}
        </Link>
    )
}
