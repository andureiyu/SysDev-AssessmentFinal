import { motion } from "framer-motion";

export default function Navbar() {
  const hoverAnimation = {
    scale: 1.1,
    color: "#1db954", 
    transition: { duration: 0.3 },
  };

  return (
    <nav className="bg-[#F1F0E9] p-4 shadow-md">
      <ul className="flex space-x-8 justify-center text-white font-sans">
        <motion.li
          whileHover={hoverAnimation}
          className="font-urbanist cursor-pointer font-bold text-[#2e2555]"
        >
          <a href="/">Home</a>
        </motion.li>

        <motion.li
          whileHover={hoverAnimation}
          className="font-urbanist cursor-pointer font-bold text-[#ff642d]"
        >
          <a href="/projects">Projects</a>
        </motion.li>

        <motion.li
          whileHover={hoverAnimation}
          className="font-urbanist cursor-pointer font-bold text-[#ff642d]"
        >
          <a href="/collaborations">Collaborations</a>
        </motion.li>
      </ul>
    </nav>
  );
}
