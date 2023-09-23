import React from "react"

export function GroupInput({ children, id }) {

    children = children.map(( element, key ) => {
        return React.cloneElement(element, { id, key })
    })

    return (
        <div className="flex flex-col">
            { children }
        </div>
    )
}
