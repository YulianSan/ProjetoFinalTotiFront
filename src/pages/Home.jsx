import { CardProduct } from "../components/Card/CardProduct"
import { Slide } from "../components/Slide/Slide"
import { useTitle } from "../hooks/useTitle"
import { useApi } from '../hooks/useApi.js'
import { useEffect, useState } from "react"

export function Home({ title }) {
    useTitle(title)
    const api = useApi()
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const { data } = await api.get('/product')

        if(!data.success) {
            console.log('Error')
        }

        setProducts(data.data)
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <Slide>
                {
                    products.map( product => (
                        <CardProduct {...product} key={product.id} />
                    ))
                }
            </Slide>
        </>
    )
}
