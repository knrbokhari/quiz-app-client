import Footer from "../components/Footer";
import NavbarHome from "../components/Navbar/NavbarHome";

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 bg-gray-100">
      <div className="min-h-screen">
        <NavbarHome />
        {children}
        <Footer />
      </div>
    </div>
  );
}
