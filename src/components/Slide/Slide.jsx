import { useScrollSlide } from "../../hooks/useScrollSide"
import { SlideButton } from "./SlideButton";
import { SlideContent } from "./SlideContent";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

export function Slide({ children }) {
    const { slide, prevProduct, nextProduct } = useScrollSlide(250)

    return (
        <div className="relative px-8 py-4">
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
