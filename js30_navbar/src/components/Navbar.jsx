import React, { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState();

  return (
    <nav className="w-full py-6 flex justify-between items-between">
      <img src={logo} alt="ondeck" />
      <ul className="hidden sm:flex items-center justify-center flex-1 list-none">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`text-nav ${
              index === navLinks.length - 1 ? `mr-0` : `mr-10`
            } cursor-pointer`}
          >
            <a
              href="#"
              onClick={() =>
                setToggleMenu(toggleMenu === link.id ? undefined : link.id)
              }
            >
              {link.name}
            </a>
            {link.subItems && toggleMenu === link.id && (
              <React.Fragment>
                <div className="w-[440px] absolute mt-2 ml-[-50px]">
                  <div class="w-8 overflow-hidden inline-block ml-[75px]">
                    <div class="h-4 w-4 bg-white rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <ul className="space-y-5 text-sm bg-white mt-[-10px] px-10 py-8 rounded-xl">
                    {link.subItems.map((item, index) => (
                      <li
                        key={`${link.id}_${item.id}`}
                        className="grid grid-cols-12"
                      >
                        <div className="col-span-1">
                          <img src={item.logo} alt={item.id} />
                        </div>
                        <div className="col-span-11 ml-1">
                          <p className="font-bold text-gray-900">{item.name}</p>
                          <p className="text-slate-500">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center gap-1 text-nav">
        <button className="text-nav px-5">Sign In</button>
        <button className="text-white font-bold bg-darkGreen px-5 py-3 rounded">
          Try for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
