import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <div id="skills" className=" bg-bgColor">
      <div className="w-full flex flex-col justify-center space-y-10">
        <h2 className=" text-linkColor sm:text-6xl text-3xl text-center mt-10 italic">
          Skills
        </h2>
        <div className="w-[80%] m-auto space-y-10 ">
          <div className="space-y-4 my-5">
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
            {/* </div> */}
          </div>
          <div className="space-y-3">
            <h2 className=" text-linkColor text-3xl text-center">Languages</h2>
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
                completed={85}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
            <div>
              <p className=" text-textColor">JAVASRIPT</p>
              <ProgressBar
                completed={75}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
          </div>
          <div className="space-y-3 mt-5">
            <h2 className=" text-linkColor text-3xl text-center">Frameworks</h2>
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
            <div>
              <p className=" text-textColor">NODE JS</p>
              <ProgressBar
                completed={65}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
            <div>
              <p className=" text-textColor">EXPRESS JS</p>
              <ProgressBar
                completed={60}
                baseBgColor="#d9b5ec"
                bgColor="#7e10be"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
