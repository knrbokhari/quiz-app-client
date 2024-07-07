import Link from "next/link";
import React from "react";

const QuizCard = ({ data }: any) => {
  return (
    <Link href="/">
      <div className="p-5 w-52 border rounded-md hover:border-sky-500">
        <h2 className="text-lg font-semibold"> Topic: {data?.name}</h2>
        <p>{data?.description}</p>
      </div>
    </Link>
  );
};

export default QuizCard;
