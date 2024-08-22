import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const PricingSection = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <span className="bf-neutral-900 text-orange-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Prices
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8">
        Our plans
      </h2>
      <div className="flex mx-24 flex-wrap justify-center items-center gap-4">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
            <div className="p-10 border-2 border-neutral-950 rounded-xl">
              <p className="text-4xl mb-6">
                {option.title}
                {option.title == "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text text-sm mb-4 ml-2 italic">
                    Recommended
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-orange-500 tracking-tighter">/Mo.</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2></CheckCircle2>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-40 h-12 p-5 mt-20 tracking-tight text-xl bg-gradient-to-r from-orange-500 to-orange-600 py-2 px-3 rounded-md hover:scale-110 duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
