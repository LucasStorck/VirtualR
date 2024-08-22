const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-black	color: rgb(0 0 0)">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet
        odio eget nisl dapibus gravida. In at luctus ante. Sed ipsum nibh,
        luctus vel arcu sit amet, interdum euismod ligula.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-600 py-3 px-4 mx-3 rounded-md hover:scale-110 duration-200"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border border-black border-color: rgb(0 0 0) hover:scale-110 duration-200"
        >
          Documentation
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
