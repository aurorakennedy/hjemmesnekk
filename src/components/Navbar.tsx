const Navbar = () => {
  return (
    <nav className="background-color: rgb(190 242 100); bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"></div>
      <div className="absolute text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4  ">
        <a href="/">
          <span className="font-rock font-bold text-7xl text-pink-600">
            Aurora Kennedy
          </span>
        </a>
      </div>

      {/* <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <a
                    href="#"
                    className="text-pink-600 font-burtons hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Strikk
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 font-burtons hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reiser
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 font-burtons hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Venner
                  </a>
                </div>
              </div> */}
    </nav>
  );
};

export default Navbar;
