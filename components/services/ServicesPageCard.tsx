import Image, { StaticImageData } from "next/image";

interface ServicesPageCardProps {
  title: string;
  description: string;
  img: string;
}

const ServicesPageCard = ({
  title,
  description,
  img,
}: ServicesPageCardProps) => {
  return (
    <div className="group w-4/5 h-60 bg-[#d9d9d960] flex items-center rounded-md relative">
      <img src={img} alt={title} className="w-48 h-48 bg-slate-300 ml-4 flex-none rounded-md absolute left-0 group-hover:-left-12 transition-all duration-500" />
      <div className="mx-4">
        <h3 className="text-2xl absolute top-4 right-4 group-hover:-top-4 group-hover:-right-4 group-hover:bg-slate-300 px-2 rounded-md group-hover:text-black transition-all duration-500">
          {title}
        </h3>
        <p className="ml-52 group-hover:ml-44 group-hover:text-xl transition-all duration-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesPageCard;
