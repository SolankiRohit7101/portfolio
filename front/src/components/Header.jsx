import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiWindow } from "react-icons/hi2";
import { RiCloseLine } from "react-icons/ri";
import {  useState } from "react";

const Header = () => {
  const [dropdown, setDropDown] = useState("hide");

  return (
    <>
      <div className="w-full relative top-0  font-semibold   text-white bg-[#343353] shadow-xl ">
        <div className="mx-8 sm:mx-40  flex justify-between items-center md:grid md:grid-rows-1 md:grid-cols-2  gap-4 py-5">
          <div className=" place-content-start">
            <HiWindow className="text-2xl hover:text-[#f9594d] hover:cursor-pointer " />
          </div>
          <div className=" md:hidden">
            {dropdown === "hide" ? (
              <HiMenuAlt1
                className="text-2xl  md:hidden   place-content-end   hover:text-[#f9594d] hover:cursor-pointer"
                onClick={() => setDropDown("show")}
              />
            ) : (
              <RiCloseLine
                className="text-2xl  md:hidden   place-content-end   hover:text-[#f9594d] hover:cursor-pointer"
                onClick={() => setDropDown("hide")}
              />
            )}
          </div>
          <ul
            className={` hidden
              list-none    md:flex    place-content-end  gap-4`}
          >
            <li className="hover:text-[#f9594d]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#f9594d]">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="hover:text-[#f9594d]">
              <Link to={"/project"}>project</Link>
            </li>
            <li className="hover:text-[#f9594d]">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`
            ${dropdown === "hide" ? "hidden" : " "}
            absolute  w-full border-b text-center bg-[#343353] list-none py-4 text-white      text-lg     flex flex-col gap-5  
            `}
      >
        <li className="hover:text-[#f9594d]">
          <Link to={"/"} onClick={() => setDropDown("hide")}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#f9594d]">
          <Link to={"/about"} onClick={() => setDropDown("hide")}>
            About
          </Link>
        </li>
        <li className="hover:text-[#f9594d]">
          <Link to={"/project"} onClick={() => setDropDown("hide")}>
            project
          </Link>
        </li>
        <li className="hover:text-[#f9594d]">
          <Link to={"/contact"} onClick={() => setDropDown("hide")}>
            Contact
          </Link>
        </li>
      </div>
    </>
  );
};

export default Header;
