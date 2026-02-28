import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { name: "Electronics", icon: "⚡" },
  { name: "Gaming", icon: "🎮" },
  { name: "Fashion", icon: "👕" },
];

const Categories = () => {
  const navigate = useNavigate();   // ✅ Added

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      
      <h2 className="text-3xl md:text-5xl text-neonPurple font-bold mb-16 drop-shadow-[0_0_15px_#8A2BE2]">
        Explore The Universe
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{
              rotateX: 10,
              rotateY: -10,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => navigate(`/${cat.name.toLowerCase()}`)}   // ✅ Added
            className="bg-white/5 backdrop-blur-md border border-neonBlue rounded-2xl p-12 text-center cursor-pointer shadow-neonBlue hover:shadow-neonPink"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="text-6xl mb-6">{cat.icon}</div>
            <h3 className="text-2xl text-white font-semibold">
              {cat.name}
            </h3>
          </motion.div>
        ))}
      </div>

    </motion.section>
  );
};

export default Categories;