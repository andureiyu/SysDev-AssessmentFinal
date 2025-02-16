import { motion } from "framer-motion";

export default function Navbar() {
  const hoverAnimation = {
    scale: 1.1,
    color: "#F8DE7E", 
    transition: { duration: 0.3 },
  };

  return (
    <nav className="bg-[#1db954] p-4 shadow-md">
      <ul className="flex space-x-8 justify-center text-white font-sans">
        <motion.li
          whileHover={hoverAnimation}
          className="font-urbanist cursor-pointer font-bold"
        >
          <a href="/">Home</a>
        </motion.li>

        <motion.li
          whileHover={hoverAnimation}
          className="font-urbanist cursor-pointer font-bold"
        >
          <a href="/projects">Projects</a>
        </motion.li>

        <motion.li
          whileHover={hoverAnimation}
          className="font-urbanist cursor-pointer font-bold"
        >
          <a href="/collaborations">Collaborations</a>
        </motion.li>
      </ul>
    </nav>
  );
}
