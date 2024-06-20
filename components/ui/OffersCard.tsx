import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface OffersCardProps {
  color?: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  description: string;
  x: number;
  y: number;
  delay: number;
}

const OffersCard = ({
  color,
  imgSrc,
  imgAlt,
  description,
  x,
  y,
  delay
}: OffersCardProps) => {
  return (
    <motion.div
    initial={{x: x, y: y, opacity: 0.3}}
    transition={{delay: delay, duration: 0.5}}
    whileInView={{x: 0, y: 0, opacity: 1}}
    className={cn(" w-72 h-56 flex flex-col justify-center", color || "bg-transparent")}>
      <Image src={imgSrc} alt={imgAlt} className="mx-auto" />
      <p className="text-center">{description}</p>
    </motion.div>
  );
};

export default OffersCard;
