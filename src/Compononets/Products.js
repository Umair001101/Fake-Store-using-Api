// Products.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setSearchTerm, setCategory } from "../Redux/productsSlice";
import ProductItem from "./ProductItem";
import "./Products.css"; 

function Products() {
  const dispatch = useDispatch();
  const { items, status, error, searchTerm, selectedCategory } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>Error: {error}</h2>;

  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "all" || product.category === selectedCategory)
  );

  const categories = ["all", ...new Set(items.map((product) => product.category))];

  return (
    <div className="products-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="search-input"
      />

      <select
        onChange={(e) => dispatch(setCategory(e.target.value))}
        value={selectedCategory}
        className="category-select"
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <h3>No products found.</h3>
        )}
      </div>
    </div>
  );
}

export default Products;
