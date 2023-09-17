import { Start } from "./Star";

export function ReviewStar({ stars }) {
    return (
        <div className="flex relative">
            <div 
                className='overflow-hidden absolute review-stars'
                style={{ '--stars': stars }}
            >
                <div className="flex w-[calc(19.2px*5)]">
                    <Start></Start>
                    <Start></Start>
                    <Start></Start>
                    <Start></Start>
                    <Start></Start>
                </div>
            </div>
            <Start color="#a8a29e"></Start>
            <Start color="#a8a29e"></Start>
            <Start color="#a8a29e"></Start>
            <Start color="#a8a29e"></Start>
            <Start color="#a8a29e"></Start>
        </div>
    )
}
