const Navbar = () => {
  return (
    <nav className="flex flex-col gap-8 font-quicksand text-center lg:flex-row sm:justify-between py-4 lg:px-10  lg:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className=" font-rock font-extrabold text-pink-600 text-5xl no-underline hover:text-pink-700"
        >
          Aurora Kennedy{" "}
        </a>
      </div>
      <div>
        <a
          href="/about"
          className="text-lg no-underline text-grey-darkest hover:text-pink-600 ml-10"
        >
          About
        </a>
        <a
          href="/Kniting"
          className="text-lg no-underline text-grey-darkest hover:text-pink-600 ml-10"
        >
          Knitting{" "}
        </a>
        <a
          href="/Friends"
          className="text-lg no-underline text-grey-darkest hover:text-pink-600 ml-10"
        >
          Friends{" "}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
