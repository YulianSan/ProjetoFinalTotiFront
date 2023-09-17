export function Button({ click, children }){
    return(
        <button 
            onClick={click} 
            className='bg-red-500 text-white px-6 font-bold rounded-md py-2 
                w-full text-center flex justify-center my-4'>
            {children}
        </button>
    )
}
