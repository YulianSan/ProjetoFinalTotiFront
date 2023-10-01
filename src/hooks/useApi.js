import axios from 'axios'
import { useNavigate } from 'react-router-dom'

let api

export function createApi(token) {
    const navigate = useNavigate()

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
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )

    return api
}

export function useApi(token) {
    if (!api) {
        createApi(token)
    }
    return api
}

