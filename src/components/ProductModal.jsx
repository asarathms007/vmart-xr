import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import RatingStars from "./RatingStars";

const ProductModal = ({ product, onClose }) => {
  const { addToCart, setIsOpen } = useContext(CartContext);
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/10 backdrop-blur-xl border border-neonBlue rounded-2xl p-8 w-11/12 md:w-1/2 shadow-[0_0_30px_#00F5FF]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover rounded-xl"
        />

        <h2 className="text-2xl text-white mt-6">{product.name}</h2>
        <p className="text-neonPink mt-2 text-lg">₹ {product.price}</p>
        <RatingStars rating={product.rating} />

        <button
         onClick={() => {
           addToCart(product);
            setIsOpen(true);
            onClose();
            }}
         className="mt-6 px-6 py-3 border border-neonPink text-neonPink rounded-full hover:bg-neonPink hover:text-black transition shadow-[0_0_15px_#FF007F]"
            >
         Add to Cart
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white text-2xl"
        >
          ✕
        </button>

      </motion.div>
    </div>
  );
};

export default ProductModal;