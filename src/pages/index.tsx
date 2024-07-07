import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavbarHome from "../components/Navbar/NavbarHome";

export default function HomePage() {
  return (
    <div>
      <NavbarHome />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
