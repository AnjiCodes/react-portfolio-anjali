import aboutImg from "../assets/AnjaliProfile2.png";
import { ABOUT_TEXT1, ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className="pb-32">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white nunito font-normal tracking-normal"
      >
        Who's behind the Code?
        <p className="text-xl pt-3 text-neutral-400 font-medium tracking-tight">Get to know me!</p>
        </motion.h2>
        
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-7/12 lg:py-8 lg:pr-10"
        >
          <div className="flex items-center justify-center">
            <img className="" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-5/12 flex items-center justify-start"
        >
          <div className="flex flex-col lg:p-8 text-xl justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-0.5 text-white font-medium text-2xl">
            <TypeAnimation
              sequence={[
                '👋🏻Hello',
                1000, 
                '👋🏻Namaste',
                1000,
                '👋🏻Bonjour',
                1000,
                '👋🏻Ciao',
                1000,
                '👋🏻Hola',
                1000,
                '👋🏻Nǐ hǎo',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{display: 'inline-block' }}
              repeat={Infinity}/>
          </p> 
          
          <p className="my-2 max-w-xl text-gray-100 font-extralight">
          This is me, Anjali! I’m a <span className="text-gray-100"> Web Developer </span> & a <span className="text-gray-100"> Cloud Enthusiast </span>
          who loves designing, coding, and deploying projects. 
          I’m passionate about exploring new technologies and taking on diverse challenges.
          </p>
          <p className="my-2 max-w-xl text-gray-100 font-extralight">
          Currently I am diving into cloud technologies like AWS and incorporating it with Web development.
          when it comes to soft skills, I am great at communication and I am actually a quick learner. 
          I love to learn and know about tech, art, food anything & everything that this world has to offer.
          
          </p>
          <p className="my-2 max-w-xl text-white font-light">
          My top affirmation: 'I enjoy creating code that solves problems and makes digital experiences both powerful and user-friendly </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
