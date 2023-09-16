export function Card({ children }) {
    return (
        <article className="rounded-xl shadow-xl shadow-zinc-300 w-full px-4 pb-4 bg-white flex-none snap-start">
            { children }
        </article>
    )
}
