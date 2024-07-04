import { StaticImageData } from "next/image";

interface ServicesPageCardProps{
    title: string,
    description: string,
    img: StaticImageData,
}

const ServicesPageCard = () => {
  return (
    <div className="group w-4/5 h-60 bg-[#d9d9d986] flex items-center rounded-md relative transition-all">
      <div className="w-48 h-48 bg-slate-300 ml-4 flex-none rounded-md absolute group-hover:-left-12 transition-all" />
      <div className="mx-4">
        <h3 className="text-2xl absolute top-4 right-4 group-hover:-top-4 group-hover:-right-4 group-hover:bg-slate-300 px-2 rounded-md group-hover:text-black transition-all">
          TitleTitleTitle
        </h3>
        <p className="ml-52 group-hover:ml-44">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          ipsa id sapiente et quam exercitationem reiciendis ducimus provident
          libero, nobis minima distinctio in dicta.
        </p>
      </div>
    </div>
  );
};

export default ServicesPageCard;
