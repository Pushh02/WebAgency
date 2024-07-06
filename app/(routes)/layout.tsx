import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../globals.css"

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="bg-bg-image bg-cover ">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
