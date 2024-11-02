import React, { useEffect, useState } from 'react'
import './Password.scss'
import { useDispatch } from 'react-redux';
import { enterIn } from '~/store/slices/backgroundSlice';
import './juicyButton.scss'
function LockButton(){

    const dispatch = useDispatch();
    const animateButton = (e:MouseEvent) => {
        e.preventDefault();
        if(e.target instanceof HTMLElement){
            e.target.classList.remove('animate');
        }else{
            throw Error('动画按钮元素不是一个HTMLELEMENT!');
        }
        e.target.classList.add('animate');
        setTimeout(()=>{
            (e.target as HTMLElement).classList.remove('animate');
        },500);
    }
    useEffect(()=>{
        const bubblyButtons = document.getElementsByClassName('bubbly-button');
        for(const button of bubblyButtons){
            (button as HTMLElement).addEventListener('click', animateButton, false);
        }
    })
    const handleClick = () => {
        dispatch(enterIn());
    }
    return (
        <>
            <button className='bubbly-button' onClick={handleClick}> Let's Dive In. </button>
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
                    <div className={`${showUnlock?'fade-in':'hide'}`} style={{display:'flex',justifyContent:'center'}}>
                        <LockButton />
                    </div>
                </div>
            </div>
            
        </div>
    )
}