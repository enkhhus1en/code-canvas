import React, { useState } from "react";
import { logo, menu, close } from "../assets";
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
                  <div className="w-8 overflow-hidden inline-block ml-[75px]">
                    <div className="h-4 w-4 bg-white rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <SubNavMenu subItems={link.subItems} />
                </div>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
      <div className="hidden sm:flex justify-end items-center gap-1 text-nav">
        <button className="text-nav px-5">Sign In</button>
        <button className="text-white font-bold bg-darkGreen px-5 py-3 rounded">
          Try for free
        </button>
      </div>
      <button className="sm:hidden" onClick={() => setToggle(true)}>
        <img src={menu} alt="menu" />
      </button>
      <div
        className={`${
          toggle ? `absolute` : `hidden`
        } top-5 right-5 left-5 bg-white px-5 py-5 rounded-xl overflow-y-scroll`}
      >
        <ul className="space-y-5 text-sm bg-white px-4 py-4">
          {navLinks.map((link, index) => (
            <li
              key={`${link.id}_${index}`}
              className="text-slate-400 text-sm font-medium"
            >
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="uppercase"
                  onClick={() =>
                    setToggleMenu(toggleMenu === link.id ? undefined : link.id)
                  }
                >
                  {link.name}
                </a>
                {index === 0 && (
                  <button onClick={() => setToggle(false)}>
                    <img src={close} alt="close" />
                  </button>
                )}
              </div>
              {link.subItems && toggleMenu === link.id && (
                <React.Fragment>
                  <div className="w-full py-5">
                    <SubNavMenu subItems={link.subItems} />
                  </div>
                </React.Fragment>
              )}
            </li>
          ))}
          <li className="text-slate-400 text-sm font-medium">
            <button className="uppercase">Sign In</button>
          </li>
          <li>
            <button className="text-white font-bold bg-darkGreen px-5 py-3 rounded">
              Try for free
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

const SubNavMenu = ({ subItems }) => (
  <ul className="space-y-5 text-xs sm:text-sm bg-white sm:mt-[-10px] sm:px-10 sm:py-8 rounded-xl">
    {subItems.map((item, index) => (
      <li key={`${item.id}_${index}`} className="grid grid-cols-12">
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
);
