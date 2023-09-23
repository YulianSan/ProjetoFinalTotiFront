import { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Input } from './Input'

export function InputPassword({ id, register }) {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisible = () => {
        setIsVisible( prev => !prev )
    }
    return (
        <div className='relative'>
            <Input
                className="py-3 px-4 w-full rounded-md"
                type={ isVisible ? 'text': 'password' }
                register={register}
                id={ id } />
            <div 
                onClick={toggleVisible}
                className='absolute right-4 top-1/2 -translate-y-1/2 
                    cursor-pointer'>
                { !isVisible && <AiFillEyeInvisible size='1.1rem' /> }
                { isVisible && <AiFillEye size='1.1rem' /> }
            </div>
        </div>
    )
}
