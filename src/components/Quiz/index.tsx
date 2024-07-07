import React from "react";
import QuizCard from "./QuizCard";
import { useModuleList } from "@/src/framework/rest/module";

const Quiz = () => {
  const { data, isLoading, error } = useModuleList();

  if (isLoading) {
    return <p className="text-center my-7">Loading...</p>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="mt-12 mb-2 text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-[#1D4645] ">
        Quiz!
      </h2>
      <p className="text-center text-gray-700 mb-8">
        Select topic below to start your Quiz.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        {data?.map((i: any) => (
          <>
            <QuizCard key={i?.slug} data={i} />{" "}
          </>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
