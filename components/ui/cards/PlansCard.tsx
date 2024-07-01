import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { ReactNode } from "react";

const PlansCard = (props: { name: string; icon: ReactNode, x:number, y:number}) => {
  // const observer = new IntersectionObserver()
  return (
      <motion.div
        initial={{ x: props.x,y:props.y, opacity:0 }}
        whileInView={{ x: 0,y:0,opacity:1 }}
        transition={{ duration: 1.5 }}
        className="bg-[#232D3F] w-[500px] h-96 mt-5 rounded-lg overflow-hidden shadow-lg bg-opacity-50">
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
        </div>
      </motion.div>
  );
};

export default PlansCard;
