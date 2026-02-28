import RatingStars from "./RatingStars";
import { motion } from "framer-motion";
import products from "../data/products";
import { useState } from "react";
import ProductModal from "./ProductModal";

const ProductGrid = ({ category, searchQuery }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Move filtering logic inside component
const filteredProducts = products.filter((p) => {
  // If searching
  if (searchQuery) {
    return p.name.toLowerCase().includes(searchQuery.toLowerCase());
  }

  // If category page
  if (category) {
    return p.category === category;
  }

  // Default homepage
  return true;
});

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-3xl md:text-5xl text-neonBlue font-bold mb-16 text-center drop-shadow-[0_0_15px_#00F5FF]">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md border border-neonPurple rounded-2xl overflow-hidden cursor-pointer shadow-[0_0_15px_#8A2BE2]"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-white text-xl">{product.name}</h3>
              <p className="text-neonPink mt-2">₹ {product.price}</p>
              <RatingStars rating={product.rating} />
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </motion.section>
  );
};

export default ProductGrid;