import { useLocation } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

const Search = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get("q") || "";

  return (
    <div className="pt-32">
      <h1 className="text-center text-3xl text-neonPurple mb-8">
        Search Results: “{q}”
      </h1>
      <ProductGrid searchQuery={q} />
    </div>
  );
};

export default Search;