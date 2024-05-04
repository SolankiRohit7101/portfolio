import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import me from "../assets/me.jpg";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[84vh]  text-white  bg-[#343353] ">
      <div className="mx-2 md:mx-20 py-12  ">
        <div className="flex justify-center items-center flex-col space-y-4">
          <div className="w-32 h-32 md:w-36 md:h-36  ">
            <img
              className="w-full  object-cover rounded-full  "
              width={"128px"}
              height={"128px"}
              src={me}
              loading="lazy"
              alt="ME"
            />
          </div>
          <div className="text-center  w-64 md:w-96">
            <h1 className="text-xl md:text-3xl capitalize">Rohit Solanki</h1>
            <p className="text-sm md:text-lg mt-2 text-balance">
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
              <FiGithub className="w-5 h-5 md:w-8 md:h-8 mx-1 hover:cursor-pointer hover:text-[#f9495d]" />
            </span>
            <span>
              <FiTwitter className="w-5 h-5 mx-1 md:w-8 md:h-8 hover:cursor-pointer hover:text-[#f9495d]" />
            </span>
            <span>
              <FiLinkedin className="w-5 h-5 mx-1 md:w-8 md:h-8 hover:cursor-pointer hover:text-[#f9495d]" />
            </span>
          </div>
          <div className="pt-2">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#f9495d] my-5 py-2 px-4 rounded-3xl  "
            >
              work with me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
