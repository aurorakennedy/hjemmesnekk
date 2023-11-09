import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

const Home = () => {
  const navigate = useNavigate();

  const gotToAbout = () => {
    navigate("/about");
  };
  const gotToKnitting = () => {
    navigate("/kniting");
  };
  const gotToFriends = () => {
    navigate("/friends");
  };

  return (
    <>
      <body className="overflow-y: scroll bg-lime-500 ">
        <Title />
        <main className="bg-lime-500  ">
          <div className="relative  h-screen w-screen   ">
            {/* Bakgrunn */}
            <div className="hidden sm:block absolute left-5 top-20 w-48 h-auto ">
              <img
                src="/images/blomster/lyseblå.png"
                alt="Lyseblå blomst"
                className="w-full h-full object-contain"
              />
            </div>
            <div className=" hidden sm:block absolute right-20 top-6 w-32 h-auto">
              <img
                src="/images/blomster/lilla.webp"
                alt="Druelilla m/gul"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block absolute right-56 bg-center bottom-72 w-24 h-auto">
              <img
                src="/images/blomster/rosa.png"
                alt="Lyserosa "
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden xl:block absolute right-80 top-56 w-48 h-auto">
              <img
                src="/images/blomster/blå.png"
                alt="Mørkeblå"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden xl:block absolute left-80 top-5 w-48 h-auto">
              <img
                src="/images/blomster/orange.webp"
                alt="Helt oransj"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block absolute bottom-9 right-5 w-48 h-auto ">
              <img
                src="/images/blomster/rosagrønn.png"
                alt="Rosa grønn"
                className="w-full h-full object-contain"
              />
            </div>
            <div className=" hidden xl:block absolute bottom-9 left-72 w-44 h-auto ">
              <img
                src="/images/blomster/rød.png"
                alt="Rød"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden xl:block absolute bottom-28 right-96 w-24 h-auto ">
              <img
                src="/images/blomster/blåbrun.png"
                alt="Blå brun"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden xl:block absolute top-8 right-96 w-24 h-auto ">
              <img
                src="/images/blomster/grønn.png"
                alt="Grønn"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden xl:block absolute top-56 left-96 w-32 h-auto ">
              <img
                src="/images/blomster/gulrød.png"
                alt="Gul rød"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block absolute top-56 right-28 w-32 h-auto ">
              <img
                src="/images/blomster/lilla2.png"
                alt="Lilla gjennomsiktig"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block absolute top-80 left-52 w-36 h-auto ">
              <img
                src="/images/blomster/lillagul.png"
                alt="Lilla gul"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block absolute bottom-36 left-16 w-40 h-auto ">
              <img
                src="/images/blomster/oransjblå.png"
                alt="Oransj blå"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Linker */}
            <div className="absolute top-1/2 left-80">
              <button
                onClick={gotToAbout}
                className="text-purple-700 font-bold font-handwriting text-3xl hover:text-5xl"
              >
                {" "}
                Om meg{" "}
              </button>
            </div>
            <div className="absolute top-48 right-72">
              <button
                onClick={gotToKnitting}
                className="text-blue-800 font-bold font-handwriting text-3xl hover:text-5xl"
              >
                {" "}
                Strikking{" "}
              </button>
            </div>
            <div className="absolute bottom-72 right-80">
              <button
                onClick={gotToFriends}
                className="text-pink-500 font-bold font-handwriting text-3xl hover:text-5xl"
              >
                {" "}
                Friends{" "}
              </button>
            </div>

            {/* Ikke Bakgrunn */}
            {/* Kan sikkert gjøres på en letter måte, men dette er det som gjør at teksten er midt på: top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
            <div className="absolute z-10 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4  ">
              {/*<h1 className="font-rock font-bold text-7xl text-pink-600">
                Aurora Kennedy
  </h1>*/}
              <br />
              <br />

              <img
                className="inline object-scale-down h-50 w-72 rounded-3xl"
                src="/images/vintage.jpeg"
                alt="A beautiful landscape"
              ></img>
              <br />
              <br />

              <br />
              <br />
            </div>
          </div>
        </main>
      </body>
    </>
  );
};

export default Home;
