import { AiFillStar } from 'react-icons/ai'

export function Start({ color }) {
    return (
        <AiFillStar color={ color } size='1.2rem'/>
    )
}

Start.defaultProps = {
    color: '#f59e0b' 
}
