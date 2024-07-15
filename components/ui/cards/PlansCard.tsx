import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

interface PlansCardProps {
  name: string;
  icon: React.ReactNode;
  services: Array<string>;
  description: string;
  price: number | string;
  x: number;
  y: number;
}

const PlansCard = ({
  name,
  icon,
  services,
  description,
  price,
  x,
  y,
}: PlansCardProps) => {
  return (
    <motion.div
      initial={{ x: x, y: y, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#232D3F] w-3/4 md:w-3/12 h-full mt-8 md:mt-0 rounded-lg overflow-hidden shadow-lg bg-opacity-50"
    >
      <div className="px-6 mt-4">
        <div className="flex justify-between items-center my-2">
          <div className="font-bold text-2xl mb-2 underline text-[#cfcfcf]">
            {name}
          </div>
          <div className="flex justify-center items-center h-16 rounded-full w-16 bg-[#6639C7] opacity-50">
            {icon}
          </div>
        </div>

        <p className="text-white text-base">{description}</p>

        <ul className="mt-4 mx-2">
          {services.map((service, index) => {
            return (
              <li key={index} className="text-white my-2 list-disc">
                {service}
              </li>
            );
          })}
        </ul>
        <p className="w-full text-end text-xl text-green font-bold">
          {typeof price === "number" ? `₹${price}` : price}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 my-4">
        <motion.button
          variants={slideInFromLeft(1)}
          className="py-2 px-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PlansCard;
