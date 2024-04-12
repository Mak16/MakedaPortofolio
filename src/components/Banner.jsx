export default function Banner() {
  return (
    <>
      <div className="relative xl:h-[90vh] bg-[#f3f1f5]">
        <div className="w-full h-full flex flex-row p-10 justify-between items-center">
          <img
            src="src/assets/MakIMG-removebg-preview.png"
            alt="Image 1"
            className=" w-1/2 h-full object-contain rounded-6xl"
          />
          <div className="w-1/2 justify-center items-center space-y-4">
            <p className="text-linkColor text-sm sm:text-3xl">Hello!</p>
            <p className="text-textColor text-sm sm:text-3xl w-full xl:w-1/2 text-left xl:text-justify">
              I'm Makeda Banza, Graduated in IT and Web and Mobile Developer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
