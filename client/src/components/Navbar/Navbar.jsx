import React from "react";
import { SiCakephp } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu4Line } from "react-icons/ri";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    title: "Productes",
    link: "#",
  },
  {
    id: 3,
    title: "ABout",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <>
    <nav>
      <div className="container flex justify-between items-center py-4 md:pt-4">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-purple-700">Cake</p>
          <p className="text-blue-500">Shop</p>
          <SiCakephp className="text-pink-500" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-1 px-3 hover:text-red-500 hover:shadov-[0_3px_0_-1px_#ef4444] font-semibold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="text-2xl hover:bg-pink-500 hover:text-white rounded-full p-2 duration-200">
              <GiShoppingCart />
            </button>
          </ul>
        </div>
        <div className="md:hidden" onClick={() =>
            setOpen(!open)}>
          <RiMenu4Line className="text-4xl" />
        </div>
      </div>
    </nav>
    <ResponsiveMenu open={open}/>
    </>
  );
};

export default Navbar;
