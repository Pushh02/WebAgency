import { motion } from "framer-motion";

const WhatWeOffer = () => {
  return (
    <>
      <div className="h-screen overflow-x-hidden mt-4">
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
            className="text-4xl"
          >
            What we offer
          </motion.h2>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
