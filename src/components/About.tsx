import React from "react";

const About = () => {
    return (
        <>
        <body>
            {/* Bakgrunn */}
            <main className="bg-purple-500">

                <div className="text-center pt-10">
                    <h1 className="text-3xl">Bli kjent med meg:</h1>
                    <br />

                    <p>Jeg må sove med sovemaske</p>
                    <img className="inline object-scale-down h-50 w-96 rounded-md" src="/images/sovemaske.jpeg" alt="A beautiful landscape"></img>

                    <p>Jeg er forelska</p>
                    <img className="inline object-scale-down h-50 w-96 rounded-md" src="/images/grain.jpeg" alt="A beautiful landscape"></img>
                    
                    <p>Jeg elsker nudler </p>
                    <img className="inline object-scale-down h-50 w-96 rounded-md" src="/images/nudler.jpeg" alt="A beautiful landscape"></img>

                    <p>Drunk eyes</p>
                    <img className="inline object-scale-down h-50 w-96 rounded-md" src="/images/drunkeyes.jpeg" alt="A beautiful landscape"></img>
                    
                </div>
                
            </main>

        </body>
        </>
    );
    
};

export default About;