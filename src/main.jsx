import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Login as LoginStore } from './pages/Store/Login.jsx'
import { Singup } from './pages/Singup.jsx'
import { Product } from './pages/Product.jsx'
import { StoreLayout } from './layouts/StoreLayout.jsx'
import { AuthLayout } from './layouts/AuthLayout.jsx'
import { GuestLayout } from './layouts/GuestLayout.jsx'
import { GuestStoreLayout } from './layouts/GuestStoreLayout.jsx'
import { HomeStore } from './pages/Store/Home.jsx'
import { ProductCreate } from './pages/Store/Product/ProductCreate.jsx'
import { ProductUpdate } from './pages/Store/Product/ProductUpdate.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <AuthLayout />,
                children: [
                    {
                        path: '',
                        element: <Home title="Home" />,
                    },
                    {
                        path: 'product/:id',
                        element: <Product title="Detalhes do produto" />
                    },
                ]
            },
            {
                path: '/',
                element: <GuestLayout />,
                children: [
                    {
                        path: 'login',
                        element: <Login title="Login" />
                    },
                    {
                        path: 'singup',
                        element: <Singup title="Singup" />
                    },
                ],
            },
            {
                path: '/store',
                element: <GuestStoreLayout />,
                children: [
                    {
                        path: 'login',
                        element: <LoginStore title="Login Store" />
                    }
                ]
            },
            {
                path: '/store',
                element: <StoreLayout />,
                children: [
                    {
                        path: '',
                        element: <HomeStore title="Home Store" />
                    },
                    {
                        path: 'product/',
                        element: <ProductCreate title="Produto" />
                    },
                    {
                        path: 'product/:id',
                        element: <ProductUpdate title="Editar produto" />
                    }
                ]
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
