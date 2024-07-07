import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavbarHome from "../components/Navbar/NavbarHome";

export default function HomePage() {
  return (
    <div>
      <NavbarHome />
      <Main />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
