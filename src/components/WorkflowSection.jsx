import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkflowSection = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <span className="text-orange-600 rounded-full h-6 text-sm font-medium px-2 uppercase">
          Workflow
        </span>
      </div>
      <h2 className="mb-12 text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full max-w-2xl">
          <img className="rounded-xl" src={codeImg} alt="Coding" />
        </div>
        <div className="pt-5 max-w-2xl">
          {checklistItems.map((item, index) => (
            <div key={index} className="mx-10 flex mb-12">
              <div className="text-green-400 mx-6 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
