import React from 'react';
import Navbar from "./components/Navbar";
import {ReactComponent as HeartIcon} from './assets/heart.svg';

function App() {
    return (
        <div className="App bg-offWhite h-screen">
            <Navbar/>
            <div className="h-[90vh] flex items-center justify-evenly">
                <div className=" w-[30vw] h-[27vw] border-[11px] rounded-2xl border-primary relative">
                    <img src="/plant.jpeg"
                         className="h-[27vw] w-auto border-0 rounded-2xl absolute top-[4vh] left-[6vh]"/>
                </div>
                <div>
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
                    <button className="mt-[5vh] ml-[10vh] font-logo font-bold text-xl bg-primary py-4 px-5 rounded-xl">GET STARTED</button>
                </div>
            </div>

        </div>
    )
        ;
}

export default App;
