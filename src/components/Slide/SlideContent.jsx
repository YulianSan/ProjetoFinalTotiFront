import React from "react"

export const SlideContent = React.forwardRef(({ children }, ref) => {
    return (
        <div 
            ref={ref} 
            className="flex overflow-x-scroll gap-x-5 scroll-smooth snap-x 
                snap-mandatory no-scrollbar xl:[&>*]:w-[calc(20%-1rem)] 
                lg:[&>*]:w-[calc(25%-1rem)] md:[&>*]:w-[calc(33.34%-1rem)] 
                sm:[&>*]:w-[calc(50%-1rem)] py-8">
            { children }
        </div>
    )
})
