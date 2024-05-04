import projectImg from "../assets/portfolio.png";
const Project = () => {
  return (
    <div className="w-full min-h-screen bg-slate-200 px-3 sm:px-5 md:px-20 py-10">
      <div className="grid place-items-center  gap-2 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;

const ProjectCard = ({}) => {
  return (
    <div className=" max-w-full pb-5   rounded-md shadow-md border-2 ">
      <div className="flex flex-col ">
        <div className="flex justify-between  text-md  md:text-xl  font-semibold text-black/30 items-center gap-5 md:gap-10">
          <img src={projectImg} alt="" className="object-cover" />
        </div>
        <div className="flex justify-between mt-5  items-center  md:mx-10 gap-5 md:gap-10">
          <p className="text-lg md:text-2xl ">{"portfolio"} </p>
          <div className="flex gap-5 justify-between sm:px-10 ">
            <a
              href="https://portfolio-two-umber-97.vercel.app/"
              className="bg-[#a29f9f] py-2 px-2   rounded-md "
            >
              Demo
            </a>
            <a
              href="https://github.com/SolankiRohit7101/portfolio.git"
              className="bg-[#a29f9f] py-2 px-2 rounded-md  "
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
