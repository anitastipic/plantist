import React from "react";
import {ReactComponent as UserIcon} from '../assets/user.svg';
import {useNavigate} from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();
    function handleLogoClick() {
        navigate("/home")
    }

    return (
        <nav className="w-screen h-[10vh] px-[2vh] bg-primary flex items-center justify-between">
            <div className="h-[10vh] w-[40vh] flex items-center justify-between">
                <div className="h-[7vh] flex flex-col justify-evenly">
                    <div className="h-[1.4vh] w-[6vh] bg-offWhite border-0 rounded-full"></div>
                    <div className="h-[1.4vh] w-[6vh] bg-offWhite border-0 rounded-full"></div>
                    <div className="h-[1.4vh] w-[6vh] bg-offWhite border-0 rounded-full"></div>
                </div>
                <div className="flex">
                    <div className="font-logo text-[6vh] text-offWhite" onClick={() => handleLogoClick() }>Plantist</div>
                    <div
                        className="bg-offWhite h-[3.8vh] w-[6vh] ml-[12px] mt-[0.2vh] border-0 rounded-tl-[30px] rounded-br-[30px]"></div>
                </div>
            </div>
            <UserIcon className="h-[9vh] w-auto"/>
        </nav>
    )
}