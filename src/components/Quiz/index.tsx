import React from "react";
import QuizCard from "./QuizCard";

const Quiz = () => {
  const data = [
    { id: 1, name: "javascript", description: "its for frontend" },
    { id: 2, name: "javascript", description: "its for frontend" },
    { id: 3, name: "javascript", description: "its for frontend" },
    { id: 4, name: "javascript", description: "its for frontend" },
    { id: 5, name: "javascript", description: "its for frontend" },
  ];
  return (
    <div className="container mx-auto">
      <h2 className="mt-12 mb-2 text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-[#1D4645] ">
        Quiz!
      </h2>
      <p className="text-center text-gray-700 mb-8">
        Select topic below to start your Quiz.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        {data.map((i) => (
          <>
            <QuizCard key={i?.id} data={i} />{" "}
          </>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
