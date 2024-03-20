import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import me from "../assets/me.jpg";
const Home = () => {
  return (
    <div className="w-full h-[80vh]  text-white  bg-[#343353] ">
      <div className="mx-2 md:mx-20 py-12  ">
        <div className="flex justify-center items-center flex-col space-y-4">
          <div className="w-32 h-32  ">
            <img className="w-full  object-cover rounded-full  " src={me} />
          </div>
          <div className="text-center w-64">
            <h1 className="text-xl capitalize">Rohit Solanki</h1>
            <p className="text-sm mt-2 text-balance">
              I am Fresher. I have been improving my skills as{" "}
              <strong>MERN</strong> dev.
              <br />
              <br />
              harmonize the realme of frontend and backend wizardry, to create
              immersive expriences!
            </p>
          </div>
          <div className="flex pt-5 gap-3 justify-center items-center ">
            <span>
              <FiGithub className="w-5 h-5 mx-1 hover:cursor-pointer hover:text-[#f9495d]" />
            </span>
            <span>
              <FiTwitter className="w-5 h-5 mx-1  hover:cursor-pointer hover:text-[#f9495d]" />
            </span>

            <span>
              <FiLinkedin className="w-5 h-5 mx-1  hover:cursor-pointer hover:text-[#f9495d]" />
            </span>
          </div>
          <button className="bg-[#f9495d] my-5 py-2 px-4 rounded-3xl">
            work with me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
