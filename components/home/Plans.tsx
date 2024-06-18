import { motion } from "framer-motion";
import PlansCard from "../ui/PlansCard";
import { slideInFromRight } from "@/utils/motion";
import { reverse } from "dns";
const Plans = () => {
  return (
    <main className="w-screen h-screen overflow-x-hidden mt-4">
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

      <div className="flex justify-around items-center mt-10 ">
        <PlansCard name={"Basic"} />
        <PlansCard name={"Premium"} />
        <PlansCard name={"Custom"} />
        {/* <motion.section
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" max-w-[60vw] text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-dark-green">
            Description
          </h3>
          <p className="text-lg mx-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
          </p>
        </motion.section>
        <main className="min-w-48 border-l-[1px] pl-8">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <button className="px-2 ml-4 text-white hidden md:block border border-gray-400 border-r-2 border-b-2 rounded-lg hover:border-gray-500">
              View more
            </button>
          </motion.div>
        </main> */}
      </div>
      <div className="bg-[#005B41] mt-[10%] h-[20vh] flex justify-evenly items-center">
        {[1, 2, 3, 4, 5].map((item, idx) => {
          return (
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 5, repeat:Infinity }}
              key={idx}
              className="bg-[#273348] w-[40vh] h-[10vh] rounded-full flex items-center justify-center">
              Roshan Singh {idx+1}
            </motion.div>
          );
        })}
        {/* <div className="bg-[#273348] w-[40vh] h-[10vh] rounded-full flex items-center justify-center">
          Roshan
        </div>
        <div className="bg-[#273348] w-[40vh] h-[10vh] rounded-full flex items-center justify-center">
          Roshan
        </div>
        <div className="bg-[#273348] w-[40vh] h-[10vh] rounded-full flex items-center justify-center">
          Roshan Singh
        </div> */}
      </div>
    </main>
  );
};

export default Plans;
