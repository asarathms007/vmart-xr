import ProductGrid from "../components/ProductGrid";

const Fashion = () => {
  return (
    <div className="pt-32">
      <h1 className="text-center text-4xl text-neonPink mb-10">
        Fashion District 👕
      </h1>
      <ProductGrid category="Fashion" />
    </div>
  );
};

export default Fashion;