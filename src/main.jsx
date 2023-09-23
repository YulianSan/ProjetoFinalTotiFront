import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Singup } from './pages/Singup.jsx'
import { Product } from './pages/Product.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home title="Home"/>
            },
            {
                path: '/login',
                element: <Login title="Login"/>
            },
            {
                path: '/singup',
                element: <Singup title="Singup"/>
            },
            {
                path: '/product/:id',
                element: <Product title="Detalhes do produto"/>
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
