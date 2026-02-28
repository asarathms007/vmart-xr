import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = () => {
  const { cart, removeFromCart, total, isOpen, setIsOpen } = useContext(CartContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-full md:w-96 h-full bg-cyberDark border-l border-neonBlue p-6 z-50"
        >
          <h2 className="text-2xl text-neonBlue mb-6">Your Cart</h2>

          {cart.length === 0 && <p className="text-white">Cart is empty</p>}

          {cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-4 text-white">
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(index)} className="text-neonPink">
                ✕
              </button>
            </div>
          ))}

          <div className="mt-6 text-neonPink text-xl">
            Total: ₹ {total}
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 px-6 py-2 border border-neonPink text-neonPink rounded-full hover:bg-neonPink hover:text-black transition"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;