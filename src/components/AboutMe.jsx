import ProgressBar from "@ramonak/react-progress-bar";
import img from "../assets/MakIMG-removebg-preview.png";

export default function AboutMe() {
  return (
    <div className="bg-bgColor sm:p-10 p-5">
      <div className="flex xl:flex-row flex-col bg-white shadow-2xl p-5">
        <div className="xl:w-1/2 w-full space-y-10">
          <div className="flex xl:flex-row flex-col my-4">
            <img src={img} alt="Image 1" className="object-contain w-40 h-40" />
            <div className="mx-4 space-y-4">
              <div className="flex flex-row gap-2">
                <p className=" text-textColor font-bold">Name: </p>
                <p className="text-textColor">Makeda Banza</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className=" text-textColor font-bold">Profile: </p>
                <p className="text-textColor">full stack developer</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className=" text-textColor font-bold">Email: </p>
                <p className="text-textColor">makedabanza16@gmail.com</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className=" text-textColor font-bold">Phone: </p>
                <p className="text-textColor">(+243)825505783/993255720</p>
              </div>
            </div>
          </div>
          <div className="w-[90%] m-auto space-y-3">
            <h2 className=" text-linkColor text-3xl">SKILLS</h2>
            <div>
              <p className=" text-textColor">HTML</p>
              <ProgressBar
                completed={85}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
            <div>
              <p className=" text-textColor">CSS</p>
              <ProgressBar
                completed={60}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
            <div>
              <p className=" text-textColor">JAVASRIPT</p>
              <ProgressBar
                completed={85}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
          </div>
          <div className="w-[90%] m-auto space-y-3">
            <h2 className=" text-linkColor text-3xl">FRAMEWORKS</h2>
            <div>
              <p className=" text-textColor">REACT JS</p>
              <ProgressBar
                completed={75}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
            <div>
              <p className=" text-textColor">REACT NATIVE</p>
              <ProgressBar
                completed={70}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
            <div>
              <p className=" text-textColor">TAILWIND CSS</p>
              <ProgressBar
                completed={80}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 w-full justify-center items-center space-y-6 mt-6">
          <h2 className=" text-linkColor sm:text-6xl italic   text-3xl text-center shadow-inherit rounded-3xl">
            About Me
          </h2>
          <p className=" text-textColor italic bg-bgColor border-t-8 border-l-8 text-center p-4 sm:text-xl text-[10px] rounded-xl shadow-inner">
            Passionate about digital creation and problem solving, I am a
            computer scientist and web developer determined to transform ideas
            into innovative and efficient solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
