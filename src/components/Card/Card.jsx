export function Card({ children }) {
    return (
        <article className="rounded-xl shadow-xl shadow-zinc-300 max-w-[14rem] w-full px-4 pb-4 bg-white flex-none snap-start">
            { children }
        </article>
    )
}
