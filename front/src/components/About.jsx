import me from "../assets/me.jpg";
import { GoBrowser } from "react-icons/go";

const About = () => {
  return (
    <div className="py-10">
      <div className="mx-2 md:mx-20 pt-10">
        <h1 className="text-gray-600 text-3xl text-nowrap text-center md:text-left">
          About Me
        </h1>
        <div className="md:grid md:grid-cols-2  mx-0 md:mx-10  ">
          <div className="  border-slate-700 flex items-center justify-between md:border-r-2 py-5 md:py-0 px-2 gap-5">
            <img
              src={me}
              className="w-24 h-24 hidden md:block object-cover  rounded-full"
            />
            <p className="text-[10px] md:text-sm text-pretty text-black/80 font-semibold ">
              Seeking a beginner role to enhance and explore my technical
              knowledge.{" "}
              {/*  BSC.IT fresher with a strong foundation in computer
              applications, programming languages, and technical skills. */}
              A quick learner and team player, eager to contribute to an
              organization's success by leveraging my knowledge and passion for
              technology. Motivated to learn and grow, seeking a challenging
              opportunity to apply my skills and gain practical experience in
              the field.
            </p>
          </div>
          <div className=" flex flex-col  py-5 mx-4 md:grid md:grid-cols-3   border border-gray-700 md:border-none    ">
            <div className=" border-r py-3 px-2 ">
              <p>Frontend</p>
              <div className="text-sm  text-slate-500 px-4">
                <div className="py-2">
                  <div className="flex justify-between">
                    <p>React js</p>
                    <p>70%</p>
                  </div>
                  <div className="relative w-md  h-2 w-[100%] mx-auto rounded-3xl bg-gray-300">
                    <span className="absolute w-[70%] h-2 top-0 left-0 rounded-3xl bg-gradient-to-r from-[#f64f59] to-[#12c2e9] "></span>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex justify-between">
                    <p>Javascript</p>
                    <p>80%</p>
                  </div>
                  <div className="relative w-md  h-2 w-[100%] mx-auto rounded-3xl bg-gray-300">
                    <span className="absolute w-[80%] h-2 top-0 left-0 rounded-3xl bg-gradient-to-r from-[#f64f59] to-[#12c2e9] "></span>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex justify-between">
                    <p>Tailwind CSS</p>
                    <p>85%</p>
                  </div>
                  <div className="relative w-md  h-2 w-[100%] mx-auto rounded-3xl bg-gray-300">
                    <span className="absolute w-[85%] h-2 top-0 left-0 bg-blue-500 rounded-3xl bg-gradient-to-r from-[#f64f59] to-[#12c2e9] "></span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border-r py-3 px-2">
              <p>Backend</p>
              <div className="text-sm  text-slate-500  px-4">
                <div className="py-2">
                  <div className="flex justify-between">
                    <p>React js</p>
                    <p>70%</p>
                  </div>
                  <div className="relative w-md  h-2 w-[100%] mx-auto rounded-3xl bg-gray-300">
                    <span className="absolute w-[70%] h-2 top-0 left-0 rounded-3xl bg-gradient-to-r from-[#f64f59] to-[#12c2e9] "></span>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex justify-between">
                    <p>Javascript</p>
                    <p>80%</p>
                  </div>
                  <div className="relative w-md  h-2 w-[100%] mx-auto rounded-3xl bg-gray-300">
                    <span className="absolute w-[80%] h-2 top-0 left-0 rounded-3xl bg-gradient-to-r from-[#f64f59] to-[#12c2e9] "></span>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex justify-between">
                    <p>Tailwind CSS</p>
                    <p>85%</p>
                  </div>
                  <div className="relative w-md  h-2 w-[100%] mx-auto rounded-3xl bg-gray-300">
                    <span className="absolute w-[85%] h-2 top-0 left-0 bg-blue-500 rounded-3xl bg-gradient-to-r from-[#f64f59] to-[#12c2e9] "></span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-3 px-2">
              <p>Database</p>
              <div className="text-sm  text-slate-500  px-4">
                <div className="py-2">
                  <div className="flex justify-between">
                    <p>SQL</p>
                    <p>60%</p>
                  </div>
                  <div className="relative w-md  h-2 w-[100%] mx-auto rounded-3xl bg-gray-300">
                    <span className="absolute w-[60%] h-2 top-0 left-0 rounded-3xl bg-gradient-to-r from-[#f64f59] to-[#12c2e9] "></span>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex justify-between">
                    <p>Mongodb</p>
                    <p>75%</p>
                  </div>
                  <div className="relative w-md  h-2 w-[100%] mx-auto rounded-3xl bg-gray-300">
                    <span className="absolute w-[75%] h-2 top-0 left-0 rounded-3xl bg-gradient-to-r from-[#f64f59] to-[#12c2e9] "></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  text-white">
        <div className="mx-2 md:mx-20 pt-10  ">
          <h1 className="text-gray-600 text-3xl text-nowrap text-center md:text-left">
            Services
          </h1>
          <div className="flex flex-col md:grid grid-cols-3 grid-rows-1 py-5 gap-4 mx-10 ">
            <div className="flex flex-col justify-center items-center bg-[#5658e1] h-[25vh] rounded-xl ">
              <GoBrowser className="text-4xl" />
              <h1 className="text-2xl">Web Development</h1>
              <p className="text-[10px] text-center pt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae explicabo error exercitationem. Quaerat, itaque quasi?
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-black/80 bg-[#fecf5b] h-[25vh] rounded-xl ">
              <GoBrowser className="text-4xl" />
              <h1 className="text-2xl">frontend</h1>
              <p className="text-[10px] text-center pt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae explicabo error exercitationem. Quaerat, itaque quasi?
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#fe4b60] h-[25vh] rounded-xl ">
              <GoBrowser className="text-4xl" />
              <h1 className="text-2xl">Backend</h1>
              <p className="text-[10px] text-center pt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae explicabo error exercitationem. Quaerat, itaque quasi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
