import { motion } from "framer-motion";
import ServiceCard from "../ui/ServiceCard";
import "../../app/globals.css"

const Services = () => {
  return (
    <main className="h-screen overflow-x-hidden mt-4">
      <div className="ml-8 flex gap-x-4 items-center">
        <motion.div
          initial={{ opacity: 0.5, y: -40 }}
          transition={{ duration: 0.2}}
          whileInView={{ opacity: 1, y: 0 }}
          className="h-10 w-4 bg-green rounded-sm"
        />
        <motion.h2
          initial={{ opacity: 0.5, y: -20 }}
          transition={{ duration: 0.2}}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl"
        >
          Services
        </motion.h2>
      </div>

      <div className="flex justify-center items-center ">
        <motion.section
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="float-box max-w-[60vw] text-center"
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
        </main>
      </div>
    </main>
  );
};

export default Services;
