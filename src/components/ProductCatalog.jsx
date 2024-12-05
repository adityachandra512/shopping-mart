import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from './Cart';

const ProductCatalog = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Use the addToCart from context

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/items");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.Category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.ID}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                 
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.Name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {product.Description}
                  </p>
                  <p className="text-xl font-bold text-blue-500 mt-4">
                    ${product.Price}
                  </p>
                  <p className="text-sm text-gray-500">Stock: {product.Stock}</p>
                   
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-8 text-gray-500">
              No products found matching your search criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;