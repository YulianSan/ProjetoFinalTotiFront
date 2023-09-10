import React from "react"

export const SlideContent = React.forwardRef(({ children }, ref) => {
    return (
        <div ref={ref} className="flex overflow-x-scroll gap-x-4 scroll-smooth snap-x no-scrollbar">
            { children }
        </div>
    )
})
