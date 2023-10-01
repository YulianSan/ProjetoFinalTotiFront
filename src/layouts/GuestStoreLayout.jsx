import { Outlet, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"

export function GuestStoreLayout() {
    const navigate = useNavigate();
    const [token, _] = useLocalStorage('tokenStore')

    useEffect(() => { if (token) { navigate('/store') } }, [token])

    return (
        <>
            {!token && <Outlet />}
        </>
    )
}
