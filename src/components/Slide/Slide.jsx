import { useScrollSlide } from "../../hooks/useScrollSide"
import { SlideButton } from "./SlideButton";
import { SlideContent } from "./SlideContent";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

export function Slide({ children }) {
    const getX = () => {
        const widthChildren = slide.current.firstChild.getBoundingClientRect()
            .width
        const widthSlide = slide.current.getBoundingClientRect().width

        return widthChildren * Math.floor(widthSlide/widthChildren)
    }

    const { slide, prevProduct, nextProduct } = useScrollSlide(getX)

    return (
        <div className="relative px-8">
            <SlideButton click={prevProduct} className="left-0">
                <GrFormPrevious size='2rem' />
            </SlideButton>

            <SlideContent ref={slide}>
                { children }
            </SlideContent>

            <SlideButton click={nextProduct} className="right-0">
                <GrFormNext size='2rem' />
            </SlideButton>
        </div>
    )
}
