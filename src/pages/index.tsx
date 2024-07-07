import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Quiz from "../components/Quiz";
import HomeLayout from "../layouts/HomeLayout";

export default function HomePage() {
  return (
    <div>
      <Main />
      <Quiz />
      <Blog />
      <Contact />
    </div>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
