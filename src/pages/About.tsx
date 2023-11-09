import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <body>
        {/* Bakgrunn */}
        <main className="bg-purple-200">
          <Navbar />
          <div className="text-center pt-10">
            <h1 className="text-2xl font-playpen font-semibold">About:</h1>
            <br />
            <p className=" px-56">
              Hi, I'm Aurora, an informatics student. I created this webpage to
              practice what I'm learning. Usually based in Trondheim, but right
              now, I'm on an exchange semester in Athens ☀️.
            </p>
            <img
              className="inline object-scale-down h-50 w-96 pt-12 rounded-md"
              src="/images/akropolis.jpeg"
              alt="A beautiful landscape"
            ></img>
            <br />
            <br />
            <br /> <br /> <br />
          </div>
        </main>
      </body>
    </>
  );
};

export default About;
