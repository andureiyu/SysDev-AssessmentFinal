import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error in loading projects:", error));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-[#212121] p-6 sm:p-8  bg-gradient-to-b from-[#2e2555] to-[#212121]"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-6 text-neutral-200 font-serif"
      >
         My Projects:
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-black">{project.name}</h2>
            <p
              className="text-gray-700 font-mono"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}