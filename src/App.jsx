import { Outlet } from "react-router-dom"

function App() {
    return (
        <>
            <main className="max-w-7xl mx-auto">
                <Outlet />
            </main>
        </>
    )
}

export default App
