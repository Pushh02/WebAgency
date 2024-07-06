"use client";

import { ReactHTMLElement } from "react";

const Contact = () => {
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
    <main className="w-screen h-screen flex justify-start items-center flex-col pt-10   ">
      <h1 className="text-4xl font-extrabold">Contact Us</h1>
      <div className="absolute mt-12 -ml-24 bg-slate-400 pl-2 pr-2 rounded-lg w-fit">
        <h1 className="text-lg">Write us to connect</h1>
      </div>
      <div className="bg-[#ffffff49] mt-6 -ml-24 p-16 rounded-lg">
        <div>
          {/* form */}
          <form id="contact" className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2" /*for="grid-first-name"*/
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
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2" /*for="grid-last-name"*/
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
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2" /*for="grid-password"*/
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
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2" /*for="grid-password"*/
                >
                  Message
                </label>
                <textarea
                rows={3}
                  placeholder="Whats on your mind..."
                  name="message"
                  className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
              </div>
            </div>
            <div className="flex flex-wrap mt-8 -mb-6 place-content-center">
              <div className="w-1/3">
                <button
                  onClick={handleSubmit}
                  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/*  */}
      <div className="w-[22rem] h-fit px-8 py-8 ml-auto bg-[#6639c7a8] rounded-3xl mr-2 absolute bottom-4 right-4">
        <div className="flex flex-col text-white">
          <h1 className="font-bold uppercase text-2xl my-2">
            Drop in our office
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur vitae
            nibh viverra, auctor turpis sed, scelerisque ex.
          </p>

          <div className="flex my-2 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl">Email Us</h2>
              <p className="text-gray-400">
                5555 Tailwind RD, Pleasant Grove, UT 73533
              </p>
            </div>
          </div>

          <div className="flex my-2 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl">Call Us</h2>
              <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
              <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
