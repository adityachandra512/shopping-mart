import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "./Cart";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setIsLoggedIn(!!userEmail);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/billing", { state: { cart } });
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center relative shadow-md">
      <div
        className="text-white font-bold text-lg cursor-pointer"
        onClick={() => navigate("/")}
      >
        ShopEase
      </div>

      <div className="flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="text-white text-2xl relative focus:outline-none"
          >
            <FiShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {isCartOpen && (
            <div className="absolute right-0 top-12 w-80 bg-white shadow-md rounded-lg p-4 z-10">
              <h3 className="font-semibold text-lg mb-2">Cart</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div
                      key={item.ID}
                      className="flex justify-between items-center mb-4 border-b pb-2"
                    >
                      <div>
                        <h4 className="font-semibold">{item.Name}</h4>
                        <p className="text-sm text-gray-500">
                          ${item.Price} x {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.ID, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-200 text-gray-800 rounded-l hover:bg-gray-300"
                        >
                          -
                        </button>
                        <button
                          onClick={() => updateQuantity(item.ID, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 text-gray-800 rounded-r hover:bg-gray-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.ID)}
                          className="ml-2 text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={handleCheckout}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {isLoggedIn ? (
          <button
            className="text-white text-xl flex items-center hover:text-gray-300"
            onClick={handleLogout}
          >
            <FiLogOut className="mr-1" />
            Sign Out
          </button>
        ) : (
          <button
            className="text-white text-xl flex items-center hover:text-gray-300"
            onClick={() => navigate("/signup")}
          >
            <FiUser className="mr-1" />
            Signup
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
