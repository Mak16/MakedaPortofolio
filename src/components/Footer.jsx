import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className=" bg-[#969199] space-y-10 py-5">
        <p className="text-white sm:text-6xl text-3xl text-center xl:mt-0 mt-5 italic">
          Contact Me
        </p>
        <div className="flex lg:flex-row flex-col justify-center items-center pb-5 w-full m-auto space-y-5">
          <div className="flex flex-col justify-center items-center w-1/6 space-y-4">
            <Link to="tel:243825505783">
              <Icon
                icon="tabler:phone"
                className=" text-linkFocusColor p-5 bg-bgColor rounded-full w-20 h-20"
              />
            </Link>
            <div className="flex flex-col justify-center items-center">
              <p className="text-white font-bold italic">PHONE</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/6 space-y-4">
            <Link to="https://wa.me/243825505783" target="blanck">
              <Icon
                icon="ri:whatsapp-line"
                className=" text-linkFocusColor p-5 bg-bgColor rounded-full w-20 h-20"
              />
            </Link>
            <div className="flex flex-col justify-center items-center">
              <p className="text-white font-bold italic">WHATSAPP</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/6 space-y-4">
            <Link to="mailto:makedabanza16@mail.com" target="blanck">
              <Icon
                icon="mdi:email-outline"
                className=" text-linkFocusColor p-5 bg-bgColor rounded-full w-20 h-20"
              />
            </Link>
            <div className="flex flex-col justify-center items-center">
              <p className="text-white font-bold italic">EMAIL</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/6 space-y-4">
            <Link
              to="www.linkedin.com/in/makeda-banza-ba33b9248"
              target="blanck"
            >
              <Icon
                icon="et:linkedin"
                className=" text-linkFocusColor p-5 bg-bgColor rounded-full w-20 h-20"
              />
            </Link>
            <div className="flex flex-col justify-center items-center">
              <p className="text-white font-bold italic">LINKEDIN</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/6 space-y-4">
            <Link to="https://github.com/Mak16" target="blanck">
              <Icon
                icon="mingcute:github-line"
                className=" text-linkFocusColor p-5 bg-bgColor rounded-full w-20 h-20"
              />
            </Link>
            <div className="flex flex-col justify-center items-center">
              <p className="text-white font-bold italic">GITHUB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-[#d7c9e1] flex justify-center items-center">
        <p className="text-textColor">
          &copy; Copyright <strong>Makeda</strong>. All Rights Reserved
        </p>
      </div>
    </>
  );
}
