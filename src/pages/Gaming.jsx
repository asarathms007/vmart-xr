import ProductGrid from "../components/ProductGrid";

const Gaming = () => {
  return (
    <div className="pt-32">
      <h1 className="text-center text-4xl text-neonPurple mb-10">
        Gaming Arena 🎮
      </h1>
      <ProductGrid category="Gaming" />
    </div>
  );
};

export default Gaming;