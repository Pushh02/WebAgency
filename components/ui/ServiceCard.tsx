import Tilt from "react-parallax-tilt";

const ServiceCard = () => {
    return ( 
        <div className="h-36 w-56 relative mx-4">
            <Tilt
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.5}
              glareColor="#9e9e9e"
              className="h-[6.5rem] bg-greyish-blue pt-9 z-10 rounded-md"
            >
              <div className="absolute -top-7 z-20 left-1/2 transform -translate-x-1/2 rounded-full h-14 w-14 bg-[#6639C7]" />
              <p className="text-sm text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Tilt>
          </div>
     );
}
 
export default ServiceCard;