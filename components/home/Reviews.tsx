import { motion } from "framer-motion";
import ReviewCard from "../ui/ReviewCard";
const Reviews = () => {
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
          Reviews
        </motion.h2>
      </div>
      <div className="flex justify-around items-center mt-10 flex-wrap gap-10">
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
      </div>
    </main>
  );
};

export default Reviews;
