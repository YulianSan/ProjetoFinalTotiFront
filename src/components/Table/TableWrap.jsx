import React from "react";

export function TableWrap({ children, columns, data }) {

    children = children.map((element, index) => {
        return React.cloneElement(element, { columns, data, key: index })
    });

    return (
        <table className="table-fixed w-full bg-white ">
            {children}
        </table>
    )
}
