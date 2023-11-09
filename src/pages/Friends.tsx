import List from "../components/List";
import Navbar from "../components/Navbar";

function Friends() {
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
        <h1 className="text-2xl font-semibold text-center pt-10 pb-16 font-playpen">
          {" "}
          Have a look at my friends webpages:
        </h1>
        <List items={vennData} />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Friends;
