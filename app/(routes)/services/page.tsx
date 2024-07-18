import ServicesPageCard from "@/components/services/ServicesPageCard";
import services from "../../../data/services.json";

const Services = () => {
  return (
    <div className="my-8">
      <h1 className="text-4xl text-center mb-8">Our Services</h1>
      <div className="flex flex-col justify-center items-center gap-y-8">
        {services.map((services, index) => {
          return (
            <ServicesPageCard
              key={index}
              img={services.img}
              title={services.title}
              description={services.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
