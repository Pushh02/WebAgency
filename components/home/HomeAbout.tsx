import { motion } from "framer-motion";
const HomeAbout = () => {
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
          About
        </motion.h2>
      </div>
      <div
        className="p-10 m-20 bg-[#232d3faf] text-3xl">
        <p className="about" style={{"--duration":"1s"} as React.CSSProperties}>
        Welcome to <span style={{"--delay":"1s"} as React.CSSProperties}>[Agency Name]</span>, where we turn your digital dreams into reality. {"We're"} not just another
        web development and deployment agency. {"We're"} your{" "} <span style={{"--delay":"1s"} as React.CSSProperties}>dedicated partner</span> in building
        your <span style={{"--delay":"1s"} as React.CSSProperties}>online presence</span>. We believe in the power of collaboration and tailor our services
        to fit your{" "} <span style={{"--delay":"1s"} as React.CSSProperties}>unique goals and aspirations</span>.{" "}
        <br />
        <br />
        Our{" "} <span style={{"--delay":"1s"} as React.CSSProperties}> team of passionate developers, designers, and strategists </span>{" "} work tirelessly to create
        websites and digital solutions that not only meet but{" "} <span style={{"--delay":"1s"} as React.CSSProperties}>exceed your expectations</span>. With a
        focus on creativity, innovation, and attention to detail, {"we're"} here to guide you through
        every step of your online journey. {"Let's"} {" "} <span style={{"--delay":"1s"} as React.CSSProperties}> work together to make your online vision
        a success story.
        </span>
        </p>
      </div>
    </main>
  );
};

export default HomeAbout;
