import React from "react";
import Navbar from "./Navbar";

const Kniting = () => {
    return (
        <>
        <body>
            {/* Bakgrunn */}
            <Navbar/>
            <main className="bg-blue-400">
                <div className="text-center pt-10">
                    <h1 className=" text-3xl text-fuchsia-950">Jeg elsker å strikke, så dette er en del av mine prosjekter</h1>
                    <p>Men først litt kjærlighet til mams som lærte meg å strikke </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-32">
                    <div className=" text-center">
                        <img className="h-auto max-w-full rounded-lg" src="/images/strikk/føyka.jpeg" alt=""></img>
                        <span className=" text-gray-800">Føyka genser <br/> Oppskrift av Linka Neumann </span>
                    </div>
                    <div className=" text-center">
                        <img className="h-auto max-w-full rounded-lg" src="/images/strikk/ulven.jpeg" alt=""></img>
                        <span className=" text-gray-800">Svartulv genser <br/> Oppskrift av Linka Neumann </span>
                    </div>
                    <div className=" text-center">
                        <img className="h-auto max-w-full rounded-lg" src="/images/strikk/fargerikVest.jpeg" alt=""></img>
                    </div>
                    <div className=" text-center">
                        <img className="h-auto max-w-full rounded-lg" src="/images/strikk/grønnJakke.jpeg" alt=""></img>
                        <span className=" text-gray-800">Othelie jakke <br/> Oppskrift av Strikkemekka </span>
                    </div>
                    <div className=" text-center">
                        <img className="h-auto max-w-full rounded-lg" src="/images/strikk/zipJakke.jpeg" alt=""></img>
                    </div>
                    <div className=" text-center">
                        <img className="h-auto max-w-full rounded-lg" src="/images/strikk/ulven.jpeg" alt=""></img>
                    </div>
                </div>
                
            </main>

        </body>
        </>
    );
    
};

export default Kniting;