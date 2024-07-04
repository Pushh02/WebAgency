import ServicesPageCard from "@/components/services/ServicesPageCard";

const Services = () => {
  return (
    <div className="my-8">
      <h1 className="text-4xl text-center mb-8">Our Services</h1>
      <div className="flex flex-col justify-center items-center">
        <ServicesPageCard />
      </div>
    </div>
  );
};

export default Services;
