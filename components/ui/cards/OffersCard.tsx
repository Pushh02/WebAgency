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
    className={cn("h-fit w-fit md:w-72 md:h-56 flex flex-col justify-center p-4", color || "bg-transparent")}>
      <Image src={imgSrc} alt={imgAlt} className="mx-auto h-12 w-12 md:h-auto md:w-auto" />
      <p className="text-center text-sm">{description}</p>
    </motion.div>
  );
};

export default OffersCard;
