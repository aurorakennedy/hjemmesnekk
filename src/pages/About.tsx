import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen  bg-purple-200">
      <Navbar />
      <div className="text-center pt-10">
        <h1 className="text-2xl font-quicksand ">About:</h1>
        <br />
        <p className=" px-56">
          Hi, I’m Aurora! Welcome to my personal space. I’m an informatics
          student at NTNU in Trondheim, currently pursuing my master’s in
          Interaction Design, Gaming, and Learning Technology. I created this
          webpage to practice what I’m learning and to have a space where I can
          freely explore my creativity and share bits and pieces about myself. I
          hope you enjoy exploring it! 💖
        </p>
        <img
          className="inline object-scale-down h-50 w-96 pt-12 rounded-md"
          src="/images/akropolis.jpeg"
          alt="A beautiful landscape"
        ></img>
      </div>
    </div>
  );
};

export default About;
