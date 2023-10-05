import { Outlet, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"
import { UseUserProvider } from "../contexts/UserContext";
import { Header } from "../components/Header/Header";

export function AuthLayout() {
    const navigate = useNavigate();
    const [token, _] = useLocalStorage('token')

    useEffect(() => { if (!token) { navigate('/login') } }, [token])

    return (
        <UseUserProvider>
            <Header />
            {token && <Outlet />}
        </UseUserProvider>
    )
}
