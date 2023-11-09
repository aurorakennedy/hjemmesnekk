import Navbar from "../components/Navbar";

const Kniting = () => {
  return (
    <>
      <body>
        {/* Bakgrunn */}
        <main className="bg-blue-200">
          <Navbar />

          <div className="text-center pt-6">
            <h1 className=" text-2xl font-semibold text-gray-800 font-playpen">
              Some of my knitting:
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-24 py-10 font-mono">
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
              <span className=" text-gray-800"></span>
            </div>
            <div className=" text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/strikk/ulven.jpeg"
                alt=""
              ></img>
              <span className=" text-gray-800"></span>
            </div>
            <div className=" text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/strikk/føyka.jpeg"
                alt=""
              ></img>
              <span className=" text-gray-800"></span>
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
