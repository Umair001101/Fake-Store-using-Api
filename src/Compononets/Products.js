import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setSearchTerm, setCategory } from "../Redux/productsSlice";
import ProductItem from "./ProductItem";
import "./Products.css"; 

function Products() {
  const dispatch = useDispatch();
  const { items, status, error, searchTerm, selectedCategory } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>Error: {error}</h2>;
  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "all" || product.category === selectedCategory)
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const categories = ["all", ...new Set(items.map((product) => product.category))];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="products-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => {
          dispatch(setSearchTerm(e.target.value));
          setCurrentPage(1); 
        }}
        className="search-input"
      />

      <select
        onChange={(e) => {
          dispatch(setCategory(e.target.value));
          setCurrentPage(1);
        }}
        value={selectedCategory}
        className="category-select"
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <h1 className="products-title">Products</h1>
      <div className="products-count">
        {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
      </div>
      <div className="products-list">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <h3>No products found.</h3>
        )}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, idx) => {
            const pageNumber = idx + 1;
            return (
              <button
                key={pageNumber}
                className={`page-button ${currentPage === pageNumber ? "active" : ""}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
