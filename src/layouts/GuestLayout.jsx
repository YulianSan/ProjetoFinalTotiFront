import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"

export function GuestLayout({ children }) {
    const navigate = useNavigate();
    const [token, _] = useLocalStorage('token')

    useEffect(() => { if(token) { navigate('/') } }, [token])

    return (
        <>
            { !token && children }
        </>
    )
}
