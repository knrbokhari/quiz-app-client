import { useModule } from "@/src/framework/rest/module";
import HomeLayout from "@/src/layouts/HomeLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SingleQuiz = () => {
  const { query } = useRouter();
  const { data, isLoading, error } = useModule(`${query?.quiz_id}`);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<any>([]);

  if (isLoading) {
    return <p className="text-center my-7">Loading...</p>;
  }

  const handleOptionClick = (index: any) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    setUserAnswers([...userAnswers, selectedOption]);
    if (selectedOption === data.question[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < data.question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white mx-auto my-20 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
        {isFinished ? (
          <div>
            <h2 className="text-xl font-semibold">Quiz Completed</h2>
            <p>
              Your score: {score} / {data.question.length}
            </p>
            <div className="mt-4">
              {data.question.map((q: any, index: any) => (
                <div key={q._id} className="mb-4">
                  <h3 className="font-semibold">{q.question}</h3>
                  <p>
                    Your answer:{" "}
                    {userAnswers[index] !== null
                      ? `Option ${userAnswers[index] + 1}`
                      : "No answer"}
                  </p>
                  <p>
                    Correct answer: Option {q.correctAnswerIndex + 1} :{" "}
                    {q.options[q.correctAnswerIndex - 1]?.option}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {data.question[currentQuestion].question}
            </h2>
            <ul>
              {data.question[currentQuestion].options.map(
                (option: any, index: any) => (
                  <li key={option._id}>
                    <button
                      onClick={() => handleOptionClick(index)}
                      className={`block w-full p-2 my-2 rounded border ${
                        selectedOption === index
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Option {index + 1}: : {option.option}
                    </button>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={handleNextQuestion}
              className="mt-4 bg-green-500 text-white p-2 rounded"
            >
              {currentQuestion < data.question.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleQuiz;

SingleQuiz.authenticationRequired = true;

SingleQuiz.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
