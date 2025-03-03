import { motion } from "framer-motion";

import { styles } from "@/constants/styles";
import { ComputersCanvas } from "@/canvas";
import { config } from "@/constants/config";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#f4f49c]" />
          <div className="amber-gradient h-40 w-1 sm:h-80" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        
        >
           <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos; m <span className="text-[#f4f49c]">
            <TypeAnimation
              sequence={[
                `${config.hero.name}`,
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "React ,Next js Developer",
                1000,
                "FullStack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
           
            />
            
            </span>
          </h2>
          {/* <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p> */}
        </motion.div>
         

      </div>
    
      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-sky-200 flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
           <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"

/>
            
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

