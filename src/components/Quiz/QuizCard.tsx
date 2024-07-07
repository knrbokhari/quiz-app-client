import Link from "next/link";
import React from "react";

interface QuizCardProps {
  data: {
    id: string;
    slug: string;
    title: string;
    content: string;
  };
}

const QuizCard: React.FC<QuizCardProps> = ({ data }) => {
  return (
    <Link href={`/quiz/${data.slug}`}>
      <div className="p-5 w-72 border rounded-md hover:border-sky-500">
        <h2 className="text-lg font-semibold">
          Topic: <span className="text-sky-500">{data.title}</span>
        </h2>
        <p className="text-slate-500">{data.content}</p>
      </div>
    </Link>
  );
};

export default QuizCard;
