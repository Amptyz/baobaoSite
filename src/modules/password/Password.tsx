import React, { useState } from 'react'
import './Password.scss'
import { useDispatch } from 'react-redux';
import { enterIn } from '~/store/slices/backgroundSlice';

function LockButton(){
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(enterIn());
    }
    return (
        <>
            <div>
                <button onClick={handleClick}> Let's Dive In. </button>
            </div>
        </>
    )
}

export default function Password(){
    const [showUnlock, setShowUnlock] = useState(false)
    const handleInputChange = (event:React.ChangeEvent<HTMLElement>)=>{
        const inputValue = (event.target as HTMLInputElement).value;
        if(inputValue.toLowerCase()==='baobao'){
            setShowUnlock(true)
        }else{
            setShowUnlock(false)
        }
    }
    return (
        <div className='main'>
            <div className='password-container'>
                <div>
                    <input type='text' maxLength={6} onChange={handleInputChange}></input>
                    <div className={showUnlock?'fade-in':'hide'}>
                        <LockButton />
                    </div>
                </div>
            </div>
            
        </div>
    )
}