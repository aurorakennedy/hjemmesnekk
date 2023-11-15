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
    <body className="min-h-screen bg-pink-200 font-quicksand">
      <Navbar />
      <h1 className="text-2xl text-center pt-10 ">
        {" "}
        Checkout my friends webpages:
      </h1>
      <div className="mt-10">
        <List items={vennData} />
      </div>
    </body>
  );
}

export default Friends;
