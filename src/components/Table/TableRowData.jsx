import React from "react"

export function TableRowData({ label, data, children, column }) {
    children = React.cloneElement(children, { data, column, key: label })
    return (
        <>
            {children}
        </>
    )
}
