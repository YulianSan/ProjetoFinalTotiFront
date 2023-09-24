import { Outlet, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"

export function StoreLayout() {
    const navigate = useNavigate();
    const [token, _] = useLocalStorage('token')

    useEffect(() => { if(!token) { navigate('/store/login') } }, [token])

    return (
        <>
            { token && <Outlet /> }
        </>
    )
}
