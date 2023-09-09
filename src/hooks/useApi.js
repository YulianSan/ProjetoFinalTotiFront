import axios from 'axios'

let api

export function createApi() {
    api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    })

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status && error.response.status === 401) {
                window.location.href = '/login'
            }
            return Promise.reject(error)
        }
    )

    return api
}

export function useApi() {
  if (!api) {
    createApi()
  }
  return api
}

