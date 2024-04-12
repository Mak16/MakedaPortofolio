import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "About me",
      link: "",
      className: "text-linkColor text-xl",
    },
    {
      name: "Projects",
      link: "",
      className: "text-linkColor text-xl",
    },
    {
      name: "Contact",
      link: "tel:243825505783",
      className: "text-linkColor text-xl",
    },
  ];
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="">
        <div className="flex flex-row justify-between sm:mx-10 mx-5 py-2 bg-white my-2 items-center">
          <Link to="" className="sm:text-3xl text-2xl font-bold text-textColor">
            Makeda
          </Link>
          <ul className="hidden sm:flex  ">
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
