const Footer = () => {
  const date = new Date();
  return (
    <div
      style={{
        letterSpacing: "3px",
      }}
      className="w-full mx-auto border-t   text-center py-4 text-white  bg-[#343353] "
    >
      {/*   <h1 className="text-md py-2 my-4 inline-block  border-b ">
        CopyRight &copy;{date.getFullYear()}
      </h1> */}
      <h3 className="text-sm py-2">Thanks For Visting!</h3>
    </div>
  );
};

export default Footer;
