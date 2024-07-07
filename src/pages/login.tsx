import React from "react";
import LoginView from "../components/auth/login-form";
import HomeLayout from "../layouts/HomeLayout";

const Login = () => {
  return (
    <div className="flex justify-center my-12">
      <LoginView />
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
