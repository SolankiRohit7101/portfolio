import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.BACKEND}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data?.success) {
        toast.success(data?.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const data = error;
      console.log(data.message);
      toast.error("errro", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />

      <div className="w-full py-5  text-white">
        <div className=" mx-2 md:mx-20 pt-5 md:pt-10 ">
          <h1 className="text-gray-600 text-nowrap text-center md:text-left text-3xl">
            Contact Me
          </h1>
          <p className="text-gray-400  text-center">Get in touch</p>
          <form className="w-full  sm:max-w-md mx-auto flex flex-col items-center space-y-5  justify-center">
            <div className=" w-[100%] block md:flex justify-between items-center  pt-5  gap-2 ">
              <input
                placeholder="your name"
                value={formData.name}
                onChange={handleInput}
                type="text"
                id="name"
                className="bg-neutral-100 placeholder:text-gray-500 text-blue-600 w-full outline-none text-md caret-blue-600 shadow-lg rounded-3xl py-2 px-5 md:mb-2 mb-2  border "
              />
              <input
                placeholder="your email"
                onChange={handleInput}
                value={formData.email}
                type="email"
                id="email"
                className="bg-neutral-100 placeholder:text-gray-500 text-blue-600 w-full outline-none text-md caret-blue-600 shadow-lg rounded-3xl py-2 px-5  border md:mb-2"
              />
            </div>
            <input
              onChange={handleInput}
              placeholder="Subject"
              value={formData.subject}
              type="text"
              id="subject"
              className="bg-neutral-100 placeholder:text-gray-500 text-blue-600 w-full outline-none text-md caret-blue-600 shadow-lg rounded-3xl py-2 px-5  border md:mb-3"
            />
            <textarea
              placeholder="Message"
              rows="6"
              type="textarea"
              value={formData.message}
              onChange={handleInput}
              id="message"
              className="bg-neutral-100  text-pretty placeholder:text-gray-500 text-blue-600 w-full outline-none text-md caret-blue-600 shadow-lg rounded-3xl py-2 px-5  border mb-5
            "
              cols="10"
            />
            <button
              onClick={hanldeSubmit}
              className="bg-[#f9495d] self-center w-40  mx-auto py-2 px-4 rounded-3xl disabled:bg-opacity-40"
              disabled={loading ? true : false}
            >
              {loading ? "loading..." : "Let's Discuss"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
