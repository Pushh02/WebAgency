import { motion } from "framer-motion";
import OffersCard from "../ui/OffersCard";
import ML from "../../public/icons/ml.png";

const WhatWeOffer = () => {
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos provident illum.";

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
        <div className="h-full flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 p-4">
            <OffersCard
              x={-400}
              y={0}
              delay={0.2}
              imgSrc={ML}
              imgAlt="ML"
              description={desc}
              color="bg-[#005b417d]"
            />
            <OffersCard
              x={0}
              y={300}
              delay={0.3}
              imgSrc={ML}
              imgAlt="ML"
              description={desc}
            />
            <OffersCard
              x={400}
              y={0}
              delay={0.4}
              imgSrc={ML}
              imgAlt="ML"
              description={desc}
              color="bg-[#005b417d]"
            />
            <OffersCard
              x={-400}
              y={0}
              delay={0.6}
              imgSrc={ML}
              imgAlt="ML"
              description={desc}
            />
            <OffersCard
              x={0}
              y={-300}
              delay={0.7}
              imgSrc={ML}
              imgAlt="ML"
              description={desc}
              color="bg-[#005b417d]"
            />
            <OffersCard
              x={400}
              y={0}
              delay={0.8}
              imgSrc={ML}
              imgAlt="ML"
              description={desc}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
