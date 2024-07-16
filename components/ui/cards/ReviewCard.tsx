import { IoStar } from "react-icons/io5";
import { motion } from "framer-motion";

const ReviewCard = (props: {
  Cname: string;
  Clogo: string;
  rating: number;
  date: string;
  d: number;
}) => {
  return (
    <motion.div
      initial={{ translateY: 50, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: props.d }}
      className="bg-[#927d7d99] w-3/4 md:w-3/12 h-fit p-5 grid justify-items-stretch rounded-lg m-2"
    >
      <div className="text-4xl justify-self-center ">{props.Clogo}</div>
      <div className="text-2xl justify-self-center ">{props.Cname}</div>
      <div className="flex justify-self-start py-2">
        {Array.from(Array(props.rating).keys()).map((i) => {
          return <IoStar className="text-3xl px-1" key={i} color="yellow" />;
        })}
      </div>
      <div className="justify-self-start">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut temporibus
        repellendus exercitationem ipsa accusantium repellat, hic ea at omnis
        voluptate! Non in ipsa dicta molestias ipsam nisi, excepturi rem aut.
      </div>
      <div className="justify-self-end mt-1">{props.date}</div>
    </motion.div>
  );
};

export default ReviewCard;
