import React from "react";
import LoginView from "../components/auth/login-form";
import HomeLayout from "../layouts/HomeLayout";
import RegisterView from "../components/auth/register-form";

const Register = () => {
  return (
    <div className="flex justify-center my-12">
      <RegisterView />
    </div>
  );
};

export default Register;

Register.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
