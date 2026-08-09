import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
// import Background from "../components/Flowerpower";
import Navbar from "../components/Navbar";

const FrontPage = () => {
  const navigate = useNavigate();

  //   const gotToAbout = () => {
  //     navigate("/about");
  //   };
  const goToKnitting = () => {
    navigate("/kniting");
  };
  const goToFriends = () => {
    navigate("/friends");
  };

  const goToPhotoAlbum = () => {
    navigate("/photoAlbum");
  };

  return (
    <div className="min-h-screen bg-blue-200 ">
      <div className="hidden xl:block">
        <Title />
      </div>
      <div className=" xl:hidden ">
        <Navbar />
      </div>

      <div className="min-h-screen bg-blue-200 flex items-start justify-center pt-20 px-8">
        {/* Container for image + text */}
        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl">
          {/* Left: Image */}
          <img
            src="/images/strikk/beach.jpeg"
            alt="A beautiful landscape"
            className="w-96 h-96 object-cover rounded-3xl shadow-lg"
          />

          {/* Right: Text */}
          <div className="text-left flex flex-col justify-center font-vs">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-xl">
              Hi, I’m Aurora!🌸 <br /> <br />
              Welcome to my personal space.🦖 <br />
              <br />
              I’m an informatics student at NTNU in Trondheim, currently
              pursuing my master’s in Interaction Design, Gaming, and Learning
              Technology. I created this webpage to practice what I’m learning
              and to have a space where I can freely explore my creativity and
              share bits and pieces about myself. <br /> <br />I hope you enjoy
              exploring it! 💖
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-6 font-typewriter">
              <button
                onClick={goToPhotoAlbum}
                className="text-lime-600 font-bold hover:text-slate-800 text-lg"
              >
                /photoAlbum
              </button>
              <button
                onClick={goToKnitting}
                className="text-blue-800 font-bold hover:text-slate-800 text-lg"
              >
                /knitting
              </button>
              <button
                onClick={goToFriends}
                className="text-pink-500 font-bold hover:text-slate-800 text-lg"
              >
                /friends
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
