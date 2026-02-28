import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-neonBlue drop-shadow-[0_0_20px_#00F5FF]"
      >
        V-MART XR
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-lg md:text-xl text-white"
      >
        Experience Shopping Beyond Screens
      </motion.p>

<motion.button
  whileHover={{ scale: 1.1 }}
  onClick={() =>
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }
  className="mt-10 px-8 py-3 border border-neonPink text-neonPink rounded-full hover:bg-neonPink hover:text-black transition duration-300 shadow-[0_0_20px_#FF007F]"
>
  Enter the Future
</motion.button>

    </section>
  );
};

export default Hero;