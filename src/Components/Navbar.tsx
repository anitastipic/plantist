import React from "react";
import {useNavigate} from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    function handleLogoClick() {
        navigate("/home");
    }

    return (
        <nav className="bg-offWhite w-screen h-[15vh] px-[2vh] flex items-center justify-between ">
            <div className="h-[15vh] w-[40vh] flex justify-between items-center">
                <div className="flex h-[10vh] p-1">
                    <p className="font-logo text-[4vw] text-primary relative" onClick={() => handleLogoClick()}>Plantist</p>
                    <div className="bg-primary h-[1.8vw] w-[3vw] border-0 rounded-tl-[30px] rounded-br-[30px] absolute left-[18.5vw]"></div>
                </div>
            </div>
            <div className="flex items-center p-1">
                <img src="/userImg.png" className="h-[7vh] w-auto"/>
            </div>
        </nav>
    )
}