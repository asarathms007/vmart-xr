import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const FloatingCartButton = () => {
  const { cart, setIsOpen } = useContext(CartContext);

  return (
    <motion.button
      key={cart.length}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 0.4 }}
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 bg-neonPink text-black px-6 py-3 rounded-full shadow-[0_0_20px_#FF007F] z-40"
    >
      🛒 {cart.length}
    </motion.button>
  );
};

export default FloatingCartButton;