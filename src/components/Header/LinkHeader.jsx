import { Link } from "react-router-dom";

export function LinkHeader({ children, to }) {
    return (
        <Link
            to={to}
            className="text-white text-lg">
            {children}</Link>
    )
}
