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
        <h1 className="text-2xl text-center pt-10 font-quicksand">
          {" "}
          Checkout my friends webpages:
        </h1>
        <List items={vennData} />
      </div>
    </div>
  );
}

export default Friends;
