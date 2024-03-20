import { GoBrowser } from "react-icons/go";
const Services = () => {
  return (
    <div className="w-full h-[45vh] text-white">
      <div className="mx-20 pt-10 ">
        <h1 className="text-gray-600 text-3xl">Services</h1>
        <div className="grid grid-cols-3 grid-rows-1 py-5 gap-4 mx-10 ">
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
  );
};

export default Services;
