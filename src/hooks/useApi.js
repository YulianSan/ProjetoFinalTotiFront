import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

let api

export function createApi(token) {
    const navigate = useNavigate()
    const location = useLocation();

    api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status && error.response.status === 401) {
                if (!location.pathname.includes('login')) { navigate('login') }
            }
            return Promise.reject(error)
        }
    )

    return api
}

export function useApi(token) {
    createApi(token)
    return api
}

