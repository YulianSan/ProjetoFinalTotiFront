export function Button({ click, children }){
    return(
        <button onClick={click} className="bg-red-600 text-white px-6 font-bold rounded-md py-2">
            {children}
        </button>
    )
}
