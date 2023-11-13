import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Background from "../components/Flowerpower";

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
    <div className="min-h-screen  bg-blue-200 ">
      <Title />

      <div className="relative  h-screen w-screen   ">
        {/* Bakgrunn */}
        <Background />
        {/* Linker */}
        <div className="absolute top-1/2 left-80">
          <button
            onClick={gotToAbout}
            className="text-purple-700 font-bold font-playpen text-2xl hover:text-pink-600"
          >
            {" "}
            Om meg{" "}
          </button>
        </div>
        <div className="absolute top-48 right-72">
          <button
            onClick={gotToKnitting}
            className="text-blue-800 font-bold font-playpen text-2xl hover:text-pink-600"
          >
            {" "}
            Strikking{" "}
          </button>
        </div>
        <div className="absolute bottom-72 right-80">
          <button
            onClick={gotToFriends}
            className="text-pink-500 font-bold font-playpen text-2xl hover:text-pink-600"
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
        </div>
      </div>
    </div>
  );
};

export default Home;
