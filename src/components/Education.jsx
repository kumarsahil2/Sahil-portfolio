import React from "react";

const Education = () => {
  return (
    <div
      name="education"
      className="w-full h-screen bg-gradient-to-r from-black to-blue-900 ... text-gray-300 flex flex-col justify-center items-center overflow-x-hidden"
    >
      <div className="max-w-[1000px] w-full px-4">
        <div className="text-center pb-8">
          <h2 className="text-4xl font-bold inline">Education</h2>
        </div>
        <div className="space-y-8">
          <div className="text-xl">
            <h3 className="text-2xl font-semibold">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-lg mt-2">
              <a
                href="https://www.manipal.edu/mit.html"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manipal Institute of Technology, Manipal
              </a>
            </p>
            <p className="text-lg italic">2023 - 2025</p>
          </div>
          <div className="text-xl">
            <h3 className="text-2xl font-semibold">
              B.Sc. Information Technology (Hons.)
            </h3>
            <p className="text-lg mt-2">
              <a
                href="https://www.gayacollege.ac.in/"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gaya College, Gaya
              </a>
            </p>
            <p className="text-lg italic">2018 - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
