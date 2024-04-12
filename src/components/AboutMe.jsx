import ProgressBar from "@ramonak/react-progress-bar";
import img from "../assets/MakIMG-removebg-preview.png";

export default function AboutMe() {
  return (
    <div className="bg-bgColor sm:py-10 sm:px-32 p-5">
      <div className="flex xl:flex-row flex-col bg-white shadow-2xl sm:px-5 sm:py-10 p-5">
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
        <div className="xl:w-1/2 w-full justify-center items-center p-4 space-y-4">
          <p className="text-linkColor sm:text-6xl text-3xl text-center xl:mt-0 mt-5 xl:text-left italic">
            About Me
          </p>
          <p className="text-textColor text-sm xl:text-xl italic w-full text-center xl:text-left">
            I am a computer scientist passionate about creating innovative
            digital experiences. With a solid background in IT and a passion for
            web and mobile development, I strive to transform concepts into
            functional and aesthetic digital solutions. My professional
            background has allowed me to acquire in-depth expertise in web and
            mobile development, using a variety of modern technologies and
            frameworks. Whether designing interactive websites, user-friendly
            mobile applications, or integrating advanced features, I am
            committed to providing tailor-made solutions that meet the needs of
            my clients and end users. With a methodical and creative approach, I
            am constantly on the lookout for the latest trends and technologies
            in the field of IT development. My goal is to create
            high-performance, accessible and aesthetically pleasing digital
            products, while respecting best development practices and ensuring
            an optimal user experience. Beyond coding, I attach great importance
            to collaboration, communication and problem solving. Working in a
            team and taking on stimulating technical challenges are essential
            aspects of my daily work. If you are looking for a passionate,
            creative and dedicated web and mobile developer for your next
            project, do not hesitate to contact me to discuss your needs and
            objectives. I look forward to collaborating with you to bring your
            digital ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
}
