import Navbar from "../components/Navbar";

const Kniting = () => {
  return (
    <>
      <body>
        {/* Bakgrunn */}
        <main className="bg-blue-200">
          <Navbar />

          <div className="text-center pt-20">
            <h1 className=" text-2xl text-black font-mono">
              Dette er noen av min strikke prosjekter:
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-32 font-mono">
            <div className=" text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/strikk/zipJakke.jpeg"
                alt=""
              ></img>
            </div>
            <div className=" text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/strikk/fargerikVest.jpeg"
                alt=""
              ></img>
            </div>
            <div className=" text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/strikk/grønnJakke.jpeg"
                alt=""
              ></img>
              <span className=" text-gray-800">
                Othelie jakke <br /> Oppskrift av Strikkemekka{" "}
              </span>
            </div>
            <div className=" text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/strikk/ulven.jpeg"
                alt=""
              ></img>
              <span className=" text-gray-800">
                Svartulv genser <br /> Oppskrift av Linka Neumann{" "}
              </span>
            </div>
            <div className=" text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/strikk/føyka.jpeg"
                alt=""
              ></img>
              <span className=" text-gray-800">
                Føyka genser <br /> Oppskrift av Linka Neumann{" "}
              </span>
            </div>

            <div className=" text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/strikk/ulven.jpeg"
                alt=""
              ></img>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};

export default Kniting;
