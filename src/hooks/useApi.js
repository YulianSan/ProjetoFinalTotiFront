import axios from 'axios'

let api

export function createApi() {
    api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJrbm9vYjA3MzNAZ21haWwuY29tIiwibmFtZSI6Ill1bGlhbiBTYW50aWFnbyIsImlhdCI6MTY5NDczMTQ5OH0.5AcU5dSiAHxqOCB-Vaxz_NiccQN00K_K0jIhQZaE_uU'
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

