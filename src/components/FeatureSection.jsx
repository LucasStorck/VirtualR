import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <span className="text-orange-600 rounded-full h-6 text-sm font-medium px-2 uppercase">
          Feature
        </span>
        <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl lg:mt-10 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full max-w-lg">
            <div className="flex mx-12">
              <div className="flex mx-5 h-10 w-10 p-2 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-black	color: rgb(0 0 0) font-medium">
                  {feature.text}
                </h5>
                <p className="text-md p-2 mb-20">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
