import { motion } from "framer-motion";

const Services = () => {
  return (
    <main className="h-screen overflow-x-hidden mt-4">
      <motion.div
      initial={{ rotate: "-37deg" }}
          transition={{duration: 0.4, delay: 0.5}}
          animate={{ rotate: "0deg" }} className="ml-8 flex gap-x-4 items-center">
        <div
          
          className="h-10 w-4 bg-green rounded-sm"
        />
        <h2 className="text-4xl">Services</h2>
      </motion.div>
    </main>
  );
};

export default Services;
