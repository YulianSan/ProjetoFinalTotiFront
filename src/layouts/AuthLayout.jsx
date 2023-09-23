import { Outlet, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"
import { useTitle } from "../hooks/useTitle";

export function AuthLayout({ title }) {
    const navigate = useNavigate();
    const [token, _] = useLocalStorage('token')
    useTitle(title)

    useEffect(() => { if(!token) { navigate('/login') } }, [token])

    return (
        <>
            { token && <Outlet /> }
        </>
    )
}
