import { useState } from "react";
import { navLinks } from "../constants";
import { hamburger } from "../assets";
import GetInTouch from "./GetInTouch";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <div className="w-full flex justify-between items-center gap-2 py-6">
      <h1 className="text-white font-heading">Johnatan Specter</h1>
      <ul className="hidden lg:flex justify-center gap-5 items-center flex-1 list-none text-nav">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`${
              index === navLinks.length - 1 ? `mr-0` : `mr-10`
            } cursor-pointer`}
          >
            {link.name}
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <GetInTouch />
      </div>
      <button className="lg:hidden" onClick={() => setToggle(true)}>
        <img src={hamburger} alt="menu" />
      </button>
    </div>
  );
};

export default Navbar;
