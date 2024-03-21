import React from "react";
import {useNavigate} from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    function handleLogoClick() {
        navigate("/home");
    }

    function handleProfileClick() {
        navigate("/login")
    }

    return (
        <nav className="bg-offWhite w-screen h-[15vh] px-[2vh] flex items-center justify-between ">
            <div className="h-[15vh] w-[40vh] flex items-center">
                <div className="flex h-[10vh] p-1">
                    <p className="font-logo text-[8vh] text-primary relative" onClick={() => handleLogoClick()}>Plantist</p>
                    <div className="bg-primary h-[3.8vh] w-[6vh] border-0 rounded-tl-[30px] rounded-br-[30px] absolute left-[35vh]"></div>
                </div>
            </div>
            <div className="flex items-center">
                <img alt="profile-icon" src="/userImg.png" className="h-auto w-[7vh]" onClick={() => handleProfileClick()}/>
            </div>
        </nav>
    )
}