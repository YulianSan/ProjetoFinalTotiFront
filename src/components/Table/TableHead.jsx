export function TableHead({ columns }) {
    return (
        <thead>
            <tr className="flex w-full">
                {
                    columns.map(column => (
                        <th
                            key={column.label}
                            style={{
                                flex: column?.grow ?? 1,
                                maxWidth: column?.maxWidth ?? 'auto',
                            }}
                            className="font-bold"
                        >
                            {column.label}
                        </th>
                    ))
                }
            </tr>
        </thead>
    )
}

TableHead.defaultProps = {
    columns: []
}
