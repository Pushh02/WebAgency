import { motion } from "framer-motion";
import ReviewCard from "../ui/cards/ReviewCard";

const Reviews = () => {
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
          Reviews
        </motion.h2>
      </div>
      <div className="w-full h-full flex-col md:flex-row flex justify-around items-center flex-wrap mt-8 relative">
        <ReviewCard
          Cname="Company Name1"
          Clogo="Company Logo"
          rating={2}
          date={"20-06-2024"}
          d={0}
        />
        <ReviewCard
          Cname="Company Name2"
          Clogo="Company Logo"
          rating={1}
          date={"20-06-2024"}
          d={0.2}
        />
        <ReviewCard
          Cname="Company Name3"
          Clogo="Company Logo"
          rating={4}
          date={"20-06-2024"}
          d={0.4}
        />
      </div>
    </main>
  );
};

export default Reviews;
