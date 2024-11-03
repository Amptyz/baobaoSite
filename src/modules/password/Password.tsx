import React, { useEffect, useState } from 'react'
import './Password.scss'
import { useDispatch } from 'react-redux';
import { enterIn, leaveOut } from '~/store/slices/backgroundSlice';
import './juicyButton.scss'
import gsap from 'gsap';
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
        // setTimeout(()=>{
        //     (e.target as HTMLElement).classList.remove('animate');
        // },500);
    }
    useEffect(()=>{
        const bubblyButtons = document.getElementsByClassName('bubbly-button');
        for(const button of bubblyButtons){
            (button as HTMLElement).addEventListener('click', animateButton, false);
        }
    },[])
    const handleClick = () => {
        const onClickTL = gsap.timeline();
        onClickTL.to('input',{
            duration: 1,
            scale: 1.5,
            opacity: 0,
            ease: 'power2.out',
            onComplete: () => {
                dispatch(enterIn());
            }
        })
        onClickTL.to('.bubbly-button',{
            duration: 1,
            opacity: 0,
            ease: 'power2.out',
            scale: 0.1,
            onComplete: () =>{
                document.querySelector('.bubbly-button')?.remove();
            }
        },'<')

    }
    return (
        <>
            <button className='bubbly-button' onClick={handleClick}> Let's Dive In. </button>
        </>
    )
}

export default function Password(){
    const [showUnlock, setShowUnlock] = useState(false)
    const dispatch = useDispatch();
    const handleInputChange = (event:React.ChangeEvent<HTMLElement>)=>{
        const inputValue = (event.target as HTMLInputElement).value;
        if(inputValue.toLowerCase()==='baobao'){
            setShowUnlock(true);
        }else{
            setShowUnlock(false);
            dispatch(leaveOut());
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