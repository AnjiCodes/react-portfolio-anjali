import { FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../assets/Anjali-Resume-General.pdf";

const Navbar = () => {
  return (
    <nav className="my-16 flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="max-[500px]:my-3 my-16 flex flex-shrink-0 items-center ">
        <a href="/" className="text-center text-3xl font-normal nunito text-white tracking-normal hover:text-neutral-400 transition duration-150">
          Anjali Mahida
        </a>
      </div>
      <div className="m-8 flex flex-col min-[320px]:flex-row min-[320px]:my-1 items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/anjali-mahida" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-neutral-400 transition duration-150" />
        </a>
        <a href="https://github.com/AnjiCodes" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-neutral-400 transition duration-150" />
        </a>
        <a 
          href={resume} 
          download="Anjali_Mahida_Resume.pdf" 
          className="tracking-normal mt-1 nunito text-white text-2xl font-thin hover:text-neutral-400 transition duration-150"
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;