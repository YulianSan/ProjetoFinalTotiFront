import { Outlet, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"
import { UseUserProvider } from "../contexts/UserContext";

export function GuestLayout() {
    const navigate = useNavigate();
    const [token, _] = useLocalStorage('token')

    useEffect(() => { if (token) { navigate('/') } }, [token])

    return (
        <>
            <UseUserProvider>
                {!token && <Outlet />}
            </UseUserProvider>
        </>
    )
}
