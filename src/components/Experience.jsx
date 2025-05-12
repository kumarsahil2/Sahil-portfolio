import React, { useEffect, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      company: "Zieers System Pvt Ltd",
      position: "SDE Intern",
      type: "OnSite",
      duration: "Jan - Present",
      work: [
        "Designed and developed an AI-driven NIFTY 50 stock prediction dashboard using LSTM, sentiment analysis (TextBlob), and real-time data from Angel One SmartAPI.",
        "Analyzed 5 years of historical data, applied feature engineering, and implemented ML/DL models, boosting prediction accuracy by 15% and lowering RMSE by 10%.",
        "Built a full-stack React-Flask application enabling user input for stock prediction and real-time display of results, with integrated NewsAPI sentiment insights and 100% accuracy in documentation. ",
      ],
    },
  ];

  return (
    <div
      id="experience-section"
      name="experience"
      className="w-full min-h-screen bg-gradient-to-r from-black to-blue-900 flex flex-col justify-center items-center p-4 pt-20"
    >
      <div className="pb-8 text-center">
        <p className="text-4xl font-bold text-gray-300">Experience</p>
      </div>

      <div className="flex flex-col w-full max-w-4xl space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`bg-[#0a192f] p-6 rounded-lg shadow-lg text-gray-300 transition-all duration-700 transform scale-95 opacity-0 ${
              isVisible ? "animate-fade-slide" : ""
            } hover:scale-100 hover:bg-[#10243f] hover:shadow-md hover:shadow-blue-800/40`}
          >
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wide">
              {exp.position}{" "}
              <span className="text-blue-400">@ {exp.company}</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium mb-3">
              {exp.type} | <span className="text-cyan-400">{exp.duration}</span>
            </p>
            <ul className="mt-4 space-y-3 text-lg text-gray-300 leading-relaxed pl-5">
              {exp.work.map((task, idx) => (
                <li
                  key={idx}
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full"
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-fade-slide {
            animation: fadeSlide 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Experience;
