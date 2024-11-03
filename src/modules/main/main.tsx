import React, { useEffect, useRef } from "react";
import mainStyle from "./main.module.scss"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dive from "../love/dive";
import { useSelector } from "react-redux";
import { RootState } from "~/store";
import Password from "../password/Password";
import gsap from 'gsap';
export default function Main() {
    const bgState = useSelector((state:RootState)=>state.background);
    const overlayRef = useRef(null);
    const mainRef = useRef(null);
    const navigate = useNavigate();

    useEffect(()=>{
        if(bgState.isEnter===true){
            gsap.to(overlayRef.current,{
                width: '2000px',
                duration: 1.5,
                ease: 'power2.out',
                onComplete: () => {
                    navigate('dive')
                }
            })
        }else{
            gsap.to(overlayRef.current,{
                width: 0,
                duration:1.5,
                ease: 'power2.out'
            })
        }
    },[bgState])
    console.log('bgState',bgState.isEnter);
    return (
        <>
            <div className={mainStyle.main} ref={mainRef}>
                <div className={mainStyle.overlay} ref={overlayRef}></div>
                <div style={{height:'100%',width:'100%',zIndex:2,position:'relative'}}>
                    <Routes>
                        <Route path='' element={<Navigate to='password'></Navigate>}></Route>
                        <Route path='password' element={<Password />}></Route>
                        <Route path='dive' element={<Dive />}></Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}