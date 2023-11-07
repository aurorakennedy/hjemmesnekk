import List from "../components/List";
import Navbar from "../components/Navbar";

function Venner() {
  const vennData = [
    {
      url: "https://helloklara.com/",
      navn: "Klara",
      bilde: "/images/Klara.jpeg",
    },
    { url: "https://isak.me/", navn: "Isak", bilde: "/images/Isak.jpg" },
  ];

  return (
    <div className="bg-pink-200">
      <Navbar />
      <div>
        <h1 className="text-2xl text-center pt-10 pb-16 font-mono">
          {" "}
          Sjekk ut nettsidene til vennene mine!
        </h1>

        <List items={vennData} />
      </div>
    </div>
  );
}

export default Venner;
