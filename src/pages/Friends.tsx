import List from "../components/List";
import Navbar from "../components/Navbar";

function Friends() {
  const vennData = [
    {
      url: "https://helloklara.com/",
      navn: "Klara",
      bilde: "/images/venner/Klara.jpeg",
    },
    { url: "https://isak.me/", navn: "Isak", bilde: "/images/venner/Isak.jpg" },
  ];

  return (
    <div className=" min-h-screen bg-pink-200">
      <Navbar />
      <div>
        <h1 className="text-2xl font-semibold text-center pt-10 font-playpen">
          {" "}
          Have a look at my friends webpages:
        </h1>
        <List items={vennData} />
        <br /> <br />
        <br />
      </div>
    </div>
  );
}

export default Friends;
