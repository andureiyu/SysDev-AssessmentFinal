import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative h-screen bg-[#212121] text-white"
    >
      {/* Main */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-[80%] px-4 sm:px-6 lg:px-10">
        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left lg:pr-10">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-urbanist text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            I'm Andrei
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white text-sm sm:text-base lg:text-lg mb-6"
          >
            An Ateneo de Davao University Student, from BS-IT 2A. I like creating and editing cinematography videos. I am a chill person who likes to bring a positive vibe to everyone around me—keeping myself humble and friendly to all.
          </motion.p>
          <motion.button
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-[#1db954] text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            <Link href="/projects">Humble Projects ›</Link>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-6 lg:mb-0 lg:ml-10 rounded-full overflow-hidden border-4 border-neutral-200 shadow-xl"
        >
          <Image
            src="/images/andreicon.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
