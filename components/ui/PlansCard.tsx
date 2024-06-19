import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { ReactNode } from "react";

const PlansCard = (props: { name: string; icon: ReactNode }) => {
  // const observer = new IntersectionObserver()
  return (
    <Tilt
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="#9e9e9e"
      //   className="bg-greyish-blue pt-9 z-10 rounded-md"
    >
      <motion.div
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#232D3F] max-w-md h-96 rounded-lg overflow-hidden shadow-lg bg-opacity-50">
        {/* <img
        className="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      /> */}
        <div className="px-6 py-4">
          <div className="flex justify-between items-center m-2">
            <div className="font-bold text-2xl mb-2 underline">
              {props.name}
            </div>
            <div className="flex justify-center items-center h-16 rounded-full w-16 bg-[#6639C7] opacity-50">
              {props.icon}
            </div>
          </div>
          <p className="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 mt-24">
          <motion.button
            variants={slideInFromLeft(1)}
            className="py-2 px-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            Buy Now
          </motion.button>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Buy Now</button> */}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default PlansCard;
