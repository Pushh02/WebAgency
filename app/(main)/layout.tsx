import SmoothScroll from "@/components/SmoothScroll";
import "../globals.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="overflow-x-hiddden">
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  );
};

export default Layout;
