// src/components/Header.jsx

import { motion } from "framer-motion";

function Title() {
  return (
    <header className="relative flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block overflow-hidden">
          <motion.h1
            className="caramel-regular mt-[350px] pr-10 pl-10 text-[35vh] whitespace-nowrap text-white"
            initial={{
              clipPath: "inset(0 101% 0 0)",
              opacity: 0,
            }}
            animate={{
              clipPath: "inset(0 0 0 0)",
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            style={{
              textShadow: `
                2px 2px 5px rgba(255, 255, 255, 0.1),
                5px 5px 10px rgba(0, 0, 0, 0.4),
                -3px -3px 8px rgba(255, 200, 100, 0.2)
              `,
            }}
          >
            Dynamics
          </motion.h1>
        </div>
      </div>

      <motion.p
        className="absolute bottom-0 left-1/2 mb-8 -translate-x-1/2 transform text-center text-lg text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 1,
        }}
      >
        Welcome to our platform - where innovation meets excellence.
      </motion.p>
    </header>
  );
}

export default Title;
