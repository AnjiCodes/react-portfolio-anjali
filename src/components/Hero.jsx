import { motion } from "framer-motion";
import resume from "../assets/AnjaliMahida-Resume.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-64">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-medium tracking-tight lg:mt-16 lg:text-6xl"
            >
              Designing the <span className='text-slateblue'>Web</span>, <br />
              Scaling the <span className='text-slateblue'>Cloud</span>, <br />
              Crafting Great <span className='text-slateblue'>Digital Experiences</span>.
            </motion.h2>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-3xl tracking-normal nunito text-white font-extralight"
            >
              Web Developer | Web Designer | Cloud Enthusiast
            </motion.p>
            <motion.p
              variants={container(1.0)}
              initial="hidden"
              animate="visible"
              className="pb-32"
              >
              <a 
                href={resume} 
                download="AnjaliMahida-Resume.pdf" 
                className="pb-16 text-2xl font-normal tracking-normal text-slateblue nunito hover:text-white transition duration-150"
                >
                RESUME ↗
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
