import List from "../components/List";
import Navbar from "../components/Navbar";

const Kniting = () => {
  const knittingData = [
    { navn: "Føyka", bilde: "/images/strikk/føyka.jpeg" },
    { navn: "Zip", bilde: "/images/strikk/zipJakke.jpeg" },
    { navn: "Vest", bilde: "/images/strikk/fargerikVest.jpeg" },
    { navn: "Grønn", bilde: "/images/strikk/grønnJakke.jpeg" },
    { navn: "Ulv", bilde: "/images/strikk/ulven.jpeg" },
    { navn: "Sokker", bilde: "/images/strikk/sokker.jpeg" },
    { navn: "Lue", bilde: "/images/strikk/lue.jpeg" },
  ];

  return (
    <div className=" min-h-screen bg-blue-200">
      <Navbar />
      <div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 pt-10 font-playpen">
          {" "}
          Some of my knitting:
        </h1>
        <List items={knittingData} />
        <br /> <br />
        <br />
      </div>
    </div>
  );
};

export default Kniting;
