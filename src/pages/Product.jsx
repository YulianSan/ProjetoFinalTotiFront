import { useParams } from "react-router-dom"
import { ProductDetails } from '../components/Pages/ProductDetails'
import { useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"

export function Product() {
    const [product, setProduct] = useState({})
    const api = useApi()
    const { id } = useParams()

    const getProduct = async () => {
        const { data } = await api.get(`/product/${id}`)

        setProduct(data.data)
    }
    useEffect(() => {
        getProduct()
    }, [id])
    return (
        <ProductDetails {...product} title={product.name ?? ''}></ProductDetails>
    )
}
