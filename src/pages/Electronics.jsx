import ProductGrid from "../components/ProductGrid";

const Electronics = () => {
  return (
    <div className="pt-32">
      <h1 className="text-center text-4xl text-neonBlue mb-10">
        Electronics Universe ⚡
      </h1>
      <ProductGrid category="Electronics" />
    </div>
  );
};

export default Electronics;