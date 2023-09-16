import { useRef } from "react"

export function useScrollSlide(x = () => 0, y = () => 0) {
    const slide = useRef()
    const nextProduct = () => {
        slide.current.scrollBy(x(), y)
    }

    const prevProduct = () => {
        slide.current.scrollBy(-x(), y)
    }

    return { slide, prevProduct, nextProduct }
}
