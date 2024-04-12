import img from "../assets/MakIMG-removebg-preview.png";
export default function Banner() {
  return (
    <>
      <div className="xl:h-[90vh] bg-bgColor">
        <div className="w-full h-full flex xl:flex-row flex-col p-10 justify-between items-center">
          <img
            src={img}
            alt="Image 1"
            className=" sm:w-1/2 w-full xl:h-full h-1/2 object-contain rounded-6xl"
          />
          <div className="xl:w-1/2 w-full justify-center items-center space-y-4">
            <p className="text-linkColor sm:text-6xl text-3xl text-center xl:mt-0 mt-5 xl:text-left italic">
              Hello!
            </p>
            <p className="text-textColor text-sm xl:text-3xl italic w-full xl:w-1/2 text-center xl:text-left">
              I'm Makeda Banza, I have a degree in computer science and I'm a
              Web and Mobile Developer based in Democratic Republic of Congo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
