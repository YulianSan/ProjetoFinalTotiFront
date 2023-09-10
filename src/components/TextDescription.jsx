import React from "react"

export function TextDescription({ children }) {
    children = React.cloneElement(children, { 
        className: `font-ligth text-zinc-500 text-xs ${ children?.props?.className ?? '' }`}
    )

    return (
        <>
            { children }
        </>
    )
}
