import {motion} from "framer-motion"
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const heading = "XXX Agency"
const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, voluptatem.`
  const splitStringUsingRegex = (inputString:string):string[]=>{
    const characters:string[] = []
    const regex = /[\s\s]/gu;
    let match
    while((match=regex.exec(inputString)) !== null){
      characters.push(match[0])
    }
    return characters
  }
  const headingChars = heading.split('')
  const textChars = text.split('') 
  const charVariants = {
    hidden:{opacity:0},
    reveal:{opacity:1},
  }
const HeroSection = () => {
    return (
      <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-2 w-screen h-screen z-[20] max-[768px]:py-5 max-[768px]:px-5"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
          <div className="Welcome-text text-[13px]">
          <motion.h1 initial="hidden" whileInView="reveal" transition={{staggerChildren:0.1}} className="py-4 text-6xl font-extrabold max-[768px]:text-3xl max-[768px]:font-medium max-[768px]:py-1">{headingChars.map((char,idx)=>(
          <motion.span transition={{duration:0.5}} variants={charVariants} key={idx}>{char}</motion.span>
        ))}</motion.h1>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>
        <div className="text-left max-[768px]:m-0 max-[768px]:py-2">
         <motion.p initial="hidden" whileInView="reveal" transition={{staggerChildren:0.019}} className="text-wrap max-[768px]:ml-3 max-[768px]:mr-3">
         {textChars.map((char,idx)=>(
           <motion.span transition={{duration:0.01}} variants={charVariants} key={idx}>
             {char}
          </motion.span>
         ))}
         </motion.p>
         </div>
        {/* <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          <motion.p initial="hidden" whileInView="reveal" transition={{staggerChildren:.001}} className="ml-5 mr-5 text-wrap max-[768px]:ml-3 max-[768px]:mr-3">
            {textChars.map((char,idx)=>(
              <motion.span transition={{duration:0.01}} variants={charVariants} key={idx}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.p> */}
        <motion.button
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
    );
}
 
export default HeroSection;