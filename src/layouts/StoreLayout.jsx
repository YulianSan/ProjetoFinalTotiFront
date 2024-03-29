import { Outlet, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"
import { UseStoreProvider } from "../contexts/StoreContext";

export function StoreLayout() {
    const navigate = useNavigate();
    const [token, _] = useLocalStorage('tokenStore')

    useEffect(() => { if (!token) { navigate('/store/login') } }, [token])

    return (
        <>
            <UseStoreProvider>
                {token && <Outlet />}
            </UseStoreProvider>
        </>
    )
}
