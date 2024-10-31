import React from "react";
import mainStyle from "./main.module.scss"
import { Navigate, Route, Routes } from "react-router-dom";
import Dive from "../love/dive";
import { useSelector } from "react-redux";
import { RootState } from "~/store";
import Password from "../password/Password";
export default function Main() {
    const bgState = useSelector((state:RootState)=>state.background);
    console.log('bgState',bgState.isEnter);
    return (
        <>
            <div className={mainStyle.main} style={{backgroundColor:bgState.isEnter?'white':'black'}}>
                <Routes>
                    <Route path='' element={<Navigate to='password'></Navigate>}></Route>
                    <Route path='password' element={<Password />}></Route>
                    <Route path='dive' element={<Dive />}></Route>
                </Routes>
            </div>
        </>
    )
}