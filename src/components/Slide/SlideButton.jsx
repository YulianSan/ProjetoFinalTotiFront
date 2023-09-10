export function SlideButton({ children, className = '', click = () => {} }) {
    return (
        <button 
            onClick={click}
            className={ `absolute p-2 rounded-full bg-white top-1/2 -translate-y-1/2 shadow-md ${className}` }
        >
            { children }
        </button>
    )
}
