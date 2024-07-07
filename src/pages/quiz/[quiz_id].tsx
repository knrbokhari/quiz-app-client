import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";

const SingleQuiz = () => {
  return <div>quiz_id</div>;
};

export default SingleQuiz;

SingleQuiz.authenticationRequired = true;

SingleQuiz.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
