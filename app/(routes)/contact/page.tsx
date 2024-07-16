"use client";

import { MdConnectWithoutContact } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = document.getElementById("contact") as HTMLFormElement;
    const formData = new FormData(form);
    console.log(e);
    formData.forEach((k, v) => {
      console.log(k, " :: ", v);
    });
  };

  return (
    <main className="w-screen pt-10">
      <h1 className="text-4xl font-extrabold text-center">Contact Us</h1>
      <div className="bg-[#ffffff49] my-12 p-16 w-3/4 md:w-3/5 mx-auto rounded-lg relative shadow-contact-box1 shadow-gray-400 ">
        <div className="absolute bg-slate-400 -top-4 left-1/2 transform -translate-x-1/2 px-2  rounded-lg w-fit">
          <h1 className="text-lg text-black">Write us to connect</h1>
        </div>
        {/* form */}
        <form id="contact" className="w-fit max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-lg font-medium mb-2" /*for="grid-first-name"*/
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-name"
                type="text"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-lg font-medium mb-2" /*for="grid-last-name"*/
              >
                Mobile
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-mobile-no"
                type="number"
                name="number"
                placeholder="Number"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-lg font-medium mb-2" /*for="grid-password"*/
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                name="email"
                placeholder="abc@xyz.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-lg font-medium mb-2" /*for="grid-password"*/
              >
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Whats on your mind..."
                name="message"
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">
              Website Design and Development
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">
              SEO Optimization
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">
              ML and AI Services
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">
              Website Hosting and Maintenance
            </label>
          </div>

          <div className="flex flex-wrap mt-8 -mb-6 place-content-center">
            <div className="w-1/3">
              <button
                onClick={handleSubmit}
                className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/*  */}

      {/*  */}

      {!isOpen && (
        <MdConnectWithoutContact
          onClick={() => setIsOpen(true)}
          id="contact-button"
          className="cursor-pointer sticky left-[90%] bottom-10 bg-[#824df3ae] rounded-full p-2 shadow-gray-400"
          size={70}
        />
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            exit={{ y: 50, opacity: 0 }}
            id="contact-div"
            className="w-[22rem] h-fit px-8 py-8 ml-auto bg-[#6639c7a8] rounded-3xl mr-2 sticky left-[90%] bottom-10"
          >
            <IoCloseCircle
              onClick={() => setIsOpen(false)}
              className="cursor-pointer absolute right-2 top-2"
              color={"gray"}
              size={30}
            />
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-2xl my-2">
                Drop in our office
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-2 w-2/3">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl">Email Us</h2>
                  <p className="text-gray-400 text-lg flex my-1">
                    <Link href={"mailto:roshan.2002kumr@mail.com"}>
                      <BiLogoGmail className="mr-2" size={25} />
                    </Link>{" "}
                    roshan.2002kumr@mail.com
                  </p>
                  <p className="text-gray-400 text-lg flex my-1">
                    <Link href={"mailto:pushkarkamble23@mail.com"}>
                      <BiLogoGmail className="mr-2" size={25} />
                    </Link>
                    pushkarkamble23@mail.com
                  </p>
                </div>
              </div>

              <div className="flex my-2 w-3/4">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl">Call Us</h2>
                  <p className="text-gray-400 text-lg flex my-1">
                    <IoCall className="mr-2" size={25} /> 7738121979
                  </p>
                  <p className="text-gray-400 text-lg flex my-1">
                    <IoCall className="mr-2" size={25} /> 9140898642
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Contact;
