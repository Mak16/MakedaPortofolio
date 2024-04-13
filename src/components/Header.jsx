import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      link: "",
      className: "text-linkColor  hover:text-linkFocusColor sm:text-xl text-lg",
    },
    {
      name: "About",
      link: "about",
      className: "text-linkColor  hover:text-linkFocusColor sm:text-xl text-lg",
    },
    {
      name: "Services",
      link: "service",
      className: "text-linkColor  hover:text-linkFocusColor sm:text-xl text-lg",
    },
    {
      name: "Contact",
      link: "contact",
      className:
        "text-textColor  hover:text-linkFocusColor sm:text-xl text-lg bg-linkColor mt-2 sm:mt-0 hover:bg-bgColor py-2 px-6 rounded-3xl",
    },
  ];
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="relative">
        <div className="flex flex-row justify-between  py-4 xl:px-10 px-5 top-0 bg-white items-center fixed w-full">
          <Link to="" className="sm:text-2xl text-lg font-bold text-textColor">
            Makeda
          </Link>
          <ul className="hidden sm:flex gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.link} className={link.className}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-3 cursor-pointer md:hidden"
          >
            {isOpen ? (
              <Icon
                className="text-linkColor w-10 h-10"
                icon="material-symbols:close"
              />
            ) : (
              <Icon
                className="text-linkColor w-10 h-14"
                icon="material-symbols-light:menu"
              />
            )}
          </div>
          <ul
            className={` bg-white md:flex pl-5 md:pl-0  md:items-center md:pb-0 pb-12 z-[1] absolute left-0 w-full md:z-auto transition-all duration-300 ease-in flex md:flex-row flex-col justify-between 
                    ${
                      isOpen
                        ? "top-14 rounded-b-2xl items-center"
                        : "top-[-490px] rounded-b-2xl items-center"
                    }`}
          >
            {links.map((link, index) => (
              <li className={link.className} key={index}>
                <Link to={link.link} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
