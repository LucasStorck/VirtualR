import { testimonials } from "../constants";

function TestimonialsSection() {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <span className="bf-neutral-900 text-orange-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Testimonials
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8">
        What people{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
          are saying
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full max-w-2xl">
            <div className="rounded-md p-6 text-md border border-neutral-950">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-700"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-900">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
