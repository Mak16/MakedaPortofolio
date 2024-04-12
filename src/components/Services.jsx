import { Icon } from "@iconify/react";

export default function Services() {
  return (
    <div className="bg-bgColor">
      <div className="w-full justify-center items-center p-4 space-y-4">
        <p className="text-linkColor sm:text-6xl text-3xl text-center xl:mt-0 mt-5 italic">
          Services
        </p>
        <div className="flex xl:flex-row flex-col w-full sm:px-32 p-5 sm:justify-between justify-evenly xl:gap-0 gap-4">
          <div className="flex-col flex items-center justify-center bg-white shadow-2xl h-[30vh] xl:w-[30%] w-full">
            <div className="border-8 border-linkColor rounded-full p-5">
              <Icon
                className=" text-linkFocusColor w-14 h-14"
                icon="streamline:web"
              />
            </div>
            <p>WEB DEVELOPMENT</p>
          </div>
          <div className="flex-col flex items-center justify-center bg-white shadow-2xl h-[30vh]  xl:w-[30%] w-full">
            <div className="border-8 border-linkColor rounded-full p-5">
              <Icon
                icon="iconoir:design-nib"
                className=" text-linkFocusColor w-14 h-14"
              />
            </div>
            <p>WEB DESIGN</p>
          </div>
          <div className="flex-col flex items-center justify-center bg-white shadow-2xl h-[30vh]  xl:w-[30%] w-full">
            <div className="border-8 border-linkColor rounded-full p-5">
              <Icon
                icon="mdi:responsive"
                className=" text-linkFocusColor w-14 h-14"
              />
            </div>
            <p>RESPONSIVE DESIGN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
