const Venner = () => {
  return (
    <>
      <body>
        {/* Bakgrunn */}
        <main className="bg-blue-400">
          <h1 className=" text-3xl text-fuchsia-950 text-center pt-10 pb-16">
            Vennene mine
          </h1>
          <div className="ml-24">
            <a href="https://helloklara.com/"> Klara</a>
            <img
              src="/images/Klara.jpeg"
              alt="Min venn Klara"
              className="w-64"
            />
          </div>
        </main>
      </body>
    </>
  );
};

export default Venner;
