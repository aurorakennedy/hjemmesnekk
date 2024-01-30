import List from "../components/List";
import Navbar from "../components/Navbar";

const Kniting = () => {
  const knittingData = [
    { navn: "Føyka genser", bilde: "/images/strikk/føyka.jpeg" },
    { navn: "Zip jakke", bilde: "/images/strikk/zipJakke.jpeg" },
    { navn: "Vest", bilde: "/images/strikk/fargerikVest.jpeg" },
    { navn: "Othelie jakke", bilde: "/images/strikk/grønnJakke.jpeg" },
    { navn: "Svartulv genser", bilde: "/images/strikk/ulven.jpeg" },
    { navn: "Sokker", bilde: "/images/strikk/sokker.jpeg" },
    { navn: "'Åsa' lue", bilde: "/images/strikk/lue.jpeg" },
  ];

  return (
    <div className=" min-h-screen bg-orange-200">
      <Navbar />
      <div>
        <h1 className="text-2xl text-center text-gray-800 pt-10 font-quicksand">
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
