import React from "react"

export function TableBody({ data, columns, children }) {

    const getRowByLabel = (column, data) => {
        return React.cloneElement(children.find(element => {
            return element.props.label == column.label
        }), { data, column, key: `${column.label}-row` })
    }

    return (
        <thead>
            {
                data.map((data, index) => (
                    <tr className="flex w-full even:bg-zinc-200" key={index}>
                        {
                            columns.map(column => (
                                <td
                                    className="p-3"
                                    style={{
                                        maxWidth: column?.maxWidth ?? 'auto',
                                        flex: column?.grow ?? 1,
                                    }}
                                    key={column.label + data[column.label]}>
                                    {getRowByLabel(column, data) ?? data[column.label]}
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
    )
}

TableBody.defaultProps = {
    columns: [],
    data: [],
}
