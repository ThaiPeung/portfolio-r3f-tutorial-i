"use client";

// - library
import Link from "next/link";

// - project
import NavLink from "./nav-link";

const Navbar: React.FC<{}> = (props) => {
  return (
    <div>
      <header className="header">
        <Link
          href="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        >
          <p className="blue-gradient_text">AH</p>
        </Link>
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink href={"/about"} text={"About"} />
          <NavLink href={"/projects"} text={"Projects"} />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
