import React from "react";
import {useNavigate} from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    function handleLogoClick() {
        navigate("/home");
    }

    return (
        <nav className="w-screen h-[15vh] px-[2vh] bg-offWhite flex items-center justify-between">
            <div className="h-[10vh] w-[40vh] flex justify-between items-center">
                <div className="flex h-[15vh] p-1 pt-2">
                    <p className="font-logo text-[9vh] text-primary" onClick={() => handleLogoClick()}>Plantist</p>
                    <div className="bg-primary h-[3.8vh] w-[6vh] ml-[12px] mt-[0.2vh] border-0 rounded-tl-[30px] rounded-br-[30px]"></div>
                </div>
            </div>
            <div className="flex items-center p-1 pt-2">
                <img src="/userImg.png" className="h-[7vh] w-auto mr-[1.5vw]"/>
                <div className="h-[8vh] flex flex-col justify-evenly">
                    <div className="h-[1.4vh] w-[6vh] bg-primary border-0 rounded-full"></div>
                    <div className="h-[1.4vh] w-[6vh] bg-primary border-0 rounded-full"></div>
                    <div className="h-[1.4vh] w-[6vh] bg-primary border-0 rounded-full"></div>
                </div>
            </div>
        </nav>
    )
}