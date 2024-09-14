import React from "react";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="p-8 md:p-16 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* Company Logo with Decorative Frame */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 rounded-lg overflow-hidden shadow-xl">
          <div className="w-full h-64 md:h-72 lg:h-80 flex items-center justify-center bg-gray-100">
            <img
              src={data.companyLogo}
              alt={`${data.companyName} Logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="absolute inset-0 border-4 border-secondary rounded-lg animate-pulse"></div>
        </div>

        {/* Experience Details */}
        <div className="w-full md:w-1/2 lg:w-2/3 text-left">
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Experience
          </h2>
          <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-800">
            <h3 className="text-4xl font-semibold text-gray-900 animate-fadeIn">
              {data.role}
            </h3>
            <p className="text-2xl text-indigo-600 mb-2 animate-slideIn">
              {data.companyName}
            </p>
            <p className="text-sm text-gray-500 animate-fadeIn">
              {data.duration}
            </p>
            <p className="mt-4 text-lg animate-slideInLeft">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
