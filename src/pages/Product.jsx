import { useParams } from "react-router-dom"

export function Product() {
    const { id } = useParams()
    return (
        <p>Product with id equal { id }</p>
    )
}
