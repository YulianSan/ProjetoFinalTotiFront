import React from "react"

export function TextBold({ children }) {
    children = React.cloneElement(children, { 
        className: `font-bold text-zinc-600 ${ children?.props?.className ?? '' }`}
    )
    return (
        <>
            { children }
        </>
    )
}
