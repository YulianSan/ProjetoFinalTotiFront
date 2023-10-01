export function Card({ children }) {
    return (
        <div className="rounded-xl shadow-xl shadow-zinc-300 w-full px-4 
                pb-4 bg-white flex-none snap-start h-full">
            {children}
        </div>
    )
}
