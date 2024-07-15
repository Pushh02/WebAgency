import { motion } from "framer-motion";
import PlansCard from "../ui/cards/PlansCard";
import { BsShop } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { TbSettingsCode } from "react-icons/tb";
import plans from "../../data/plans.json";
import "../components.css"

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
          className="text-4xl"
        >
          Plans
        </motion.h2>
      </div>
      <div className="flex md:flex-row flex-col items-center md:items-start justify-around mt-10 flex-wrap">
        <PlansCard
          name={"Basic"}
          services={plans.Esential.services}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, "
          price={plans.Esential.price}
          x={-250}
          y={0}
          icon={<BsShop size={"3em"} className="m-auto p-1" />}
        />
        <PlansCard
          name={"Advance"}
          services={plans.Advanced.services}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, "
          price={plans.Advanced.price}
          x={-200}
          y={0}
          icon={<BsBuildings size={"3em"} className="m-auto p-1" />}
        />
        <PlansCard
          name={"Custom"}
          services={plans.Custom.services}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, "
          price={plans.Custom.price}
          x={-150}
          y={0}
          icon={<TbSettingsCode size={"3.2em"} className="m-auto p-1" />}
        />
      </div>
      <div className="bg-[#005b41b9] w-full mt-10 h-28 flex justify-evenly items-center">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => {
          return (
            <motion.div
              initial={{ x: "650%" }}
              animate={{ x: "-650%" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              key={idx}
              className="bg-[#3a4f72] marquee__content w-fit h-14 px-4 rounded-full flex items-center justify-center m-2"
            >
              <p className="whitespace-nowrap">Roshan Singh {idx + 1}</p>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};

export default Plans;
