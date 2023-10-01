import { CardProduct } from "../components/Card/CardProduct"
import { Slide } from "../components/Slide/Slide"
import { useTitle } from "../hooks/useTitle"
import { useApi } from '../hooks/useApi.js'
import { useEffect, useState } from "react"
import { useUserContext } from "../contexts/UserContext"

export function Home({ title }) {
    useTitle(title)
    const user = useUserContext()
    const api = useApi(user.token)
    const [productsChunk, setProductsChunk] = useState([])

    const getProducts = async () => {
        const { data } = await api.get('/product')

        if (!data.success) {
            console.log('Error')
        }

        setProductsChunk(data.data)
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            {
                productsChunk.map((products, index) => (
                    <Slide key={index}>
                        {
                            products.map(product => (
                                <CardProduct {...product} key={product.id} />
                            ))
                        }
                    </Slide>
                ))
            }
        </>
    )
}
