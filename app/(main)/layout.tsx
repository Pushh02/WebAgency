import "../globals.css"

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <div className="overflow-x-hiddden">
          {children}
      </div>
  );
  };
  
  export default Layout;