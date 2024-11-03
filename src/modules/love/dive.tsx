import React from "react";
import './dive.scss'
function BaoBaoIntro() {
    return (
        <div className="intro-baobao">
            <span className="highlight">B</span>
            <span className="highlight">a</span>
            <span className="highlight">o</span>
            <span className="highlight">B</span>
            <span className="normal">a</span>
            <span className="highlight">o</span>
        </div>
    )
}
export default function Dive() {

    return (
        <div className="dive-main">
            <BaoBaoIntro/>
            <div className="title-text">
                dive in...
            </div>
        </div>
    )
}