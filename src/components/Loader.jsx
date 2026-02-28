import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed inset-0 bg-cyberDark flex items-center justify-center z-50"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl text-neonBlue drop-shadow-[0_0_20px_#00F5FF]"
      >
        V-MART XR
      </motion.h1>
    </motion.div>
  );
};

export default Loader;