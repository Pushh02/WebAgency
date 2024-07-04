import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../globals.css"

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-stars">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
