import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pt-10 pb-24"> 

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 text-center text-4xl text-white nunito font-normal tracking-normal">
        Tech that fuels my Creations!
        <p className="text-xl pt-3 text-neutral-400 font-medium tracking-tight"> These are the technologies I've worked with</p>
      </motion.h2>

      <Marquee autofill pauseOnHover gradient gradientColor="black" gradientWidth={85}>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        HTML
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        CSS
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        JavaScript
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        Figma
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        PHP
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        React.js
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        Node.js
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        Tailwind CSS
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        jQuery
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        MongoDB
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        Jira
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        Wordpress
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        Canva
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-slateblue">
        ASP.NET
      </div>
      </Marquee>


      <Marquee autofill pauseOnHover direction='right' gradient gradientColor="black" gradientWidth={85}>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        Python
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        Terraform
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        AWS
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        Azure
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        Google Cloud
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        Docker
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        Kubernetes
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        SQL
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        NoSQL
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        Ansible
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        RedHat (Linux)
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        GitHub
      </div>
      <div className="bg-[#161616] m-1 rounded-xl flex space-x-5 p-4 font-medium nunito text-[20px] cursor-pointer text-lightslateblue">
        Jenkins
      </div>
      </Marquee>

{/* Old skills section code below - animated logos */}

{/* 
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-7 text-center text-2xl text-slateblue font-semibold tracking-wide"
      >
        Languages & Frameworks
      </motion.h2> */}

      {/* <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-[1.2px] border-cyan-400 p-4 bg-black"
        > 
           <p className="nunito font-medium">React.js</p>
          <RiReactjsLine className="text-4xl text-cyan-400 ml-2" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Technologies;
