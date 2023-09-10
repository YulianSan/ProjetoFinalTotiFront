import { Outlet } from "react-router-dom"

function App() {
    return (
        <>
            <p className="bg-purple-800 text-white font-bold">Initial app</p>
            <Outlet />
        </>
    )
}

export default App
