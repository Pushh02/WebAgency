import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-3 flex bg-white justify-between items-center z-80">
      <Link
        href={"#"}
        id="brand"
        className="flex gap-2 items-center text-black"
      >
        XXX Agency
      </Link>
      <div id="nav-menu" className="hidden md:flex gap-x-12">
        <Link href={"#"} className="text-black font-medium hover:text-blue">
          Home
        </Link>
        <Link href={"#"} className="text-black font-medium hover:text-blue">
          Services
        </Link>
        <Link href={"#"} className="text-black font-medium hover:text-blue">
          About-Us
        </Link>
        <Link href={"#"} className="text-black font-medium hover:text-blue">
          Contact-Us
        </Link>
      </div>
      <button className="p-2 text-black hidden md:block border border-gray-400 border-r-2 border-b-2 rounded-lg hover:border-gray-800">
        Start Project
      </button>
      <button className="p-2 text-black md:hidden">menu</button>
    </nav>
  );
};

export default Navbar;
