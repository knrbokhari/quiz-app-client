import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavbarHome from "../components/Navbar/NavbarHome";
import Quiz from "../components/Quiz";

export default function HomePage() {
  return (
    <div>
      <NavbarHome />
      <Main />
      <Quiz />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
