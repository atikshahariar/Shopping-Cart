import { useMemo, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import useDebounce from "./hooks/useDebounce";
import { products, categories } from "./data/products";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const debouncedSearch = useDebounce(search);

  const closeCart = useCallback(() => setCartOpen(false), []);

  // Filter by category and search text.
  const visible = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || p.title.toLowerCase().includes(q))
    );
  }, [debouncedSearch, category]);

  return (
    <>
      <Navbar
        search={search}
        onSearchChange={setSearch}
        onCartClick={() => setCartOpen(true)}
      />

      <main className="container">
        <h1 className="page-title">Shop all products</h1>
        <CategoryFilter categories={categories} active={category} onChange={setCategory} />
        <ProductGrid products={visible} />
      </main>

      <footer className="footer">© {new Date().getFullYear()} ShopCart · Built with React</footer>

      <Cart open={cartOpen} onClose={closeCart} />
    </>
  );
}
