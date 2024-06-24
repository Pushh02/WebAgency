import { motion } from "framer-motion";
import PlansCard from "../ui/cards/PlansCard";
import { BsShop } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { TbSettingsCode } from "react-icons/tb";
const Plans = () => {
  return (
    <main className="w-screen overflow-x-hidden mt-4">
      <div className="ml-8 flex gap-x-4 items-center">
        <motion.div
          initial={{ opacity: 0.5, y: -40 }}
          transition={{ duration: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="h-10 w-4 bg-green rounded-sm"
        />
        <motion.h2
          initial={{ opacity: 0.5, y: -20 }}
          transition={{ duration: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl">
          Plans
        </motion.h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 mt-10 mx-7">
        <PlansCard name={"Basic"} icon={<BsShop size={"3em"} className="m-auto p-1" />} />
        <PlansCard name={"Advance"} icon={<BsBuildings size={"3em"} className="m-auto p-1" />} />
        <PlansCard name={"Custom"} icon={<TbSettingsCode size={"3.2em"} className="m-auto p-1" />} />
      </div>
      <div className="bg-[#005b41b9] mt-[5%] h-[20vh] flex justify-evenly items-center">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => {
          return (
            <motion.div
              initial={{ x: "650%" }}
              animate={{ x: "-650%" }}
              transition={{ duration: 8, repeat:Infinity, ease: "linear" }}
              key={idx}
              className="bg-[#3a4f72] w-60 h-16 rounded-full flex items-center justify-center m-2">
              Roshan Singh {idx+1}
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};

export default Plans;
