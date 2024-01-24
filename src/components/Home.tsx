import React from "react";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    function handleGetStarted() {
        navigate("/search");
    }


    return (
        <div className="h-[90vh] flex items-center justify-evenly ">
            <div className=" w-[30vw] h-[27vw] border-[11px] rounded-2xl border-primary relative hidden md:block">
                <img src="/plant.jpeg"
                     className="h-[27vw] w-auto border-0 rounded-2xl absolute top-[4vh] left-[6vh]"/>
            </div>
            <div className="">
                <div className="grid grid-cols-2 ">
                    <div>
                        <img className="h-[5vh] mt-2" src="/magnifyingGlass.png"/>
                    </div>
                    <div>
                        <p className="font-logo text-[5vh]">Find</p>
                    </div>
                    <div>
                        <img className="h-[5vh] mt-2" src="/plus.png"/>
                    </div>
                    <div>
                        <p className="font-logo text-[5vh]">Add</p>
                    </div>
                    <div>
                        <img className="h-[5vh] mt-2" src="/heart.png"/>
                    </div>
                    <div>
                        <p className="font-logo text-[5vh]">Take care</p>
                    </div>
                </div>
                <button
                    className="mt-[5vh] ml-[10vh] font-logo font-bold text-xl bg-primary py-4 px-5 rounded-xl text-offWhite"
                    onClick={() => handleGetStarted()}>GET
                    STARTED
                </button>
            </div>
        </div>
    )

}