import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BillingPage = ({ clearCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const [paymentType, setPaymentType] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.Price * item.quantity,
    0
  );

  const handlePayment = () => {
    if (!paymentType) {
      alert("Please select a payment method before proceeding.");
      return;
    }

    setPaymentSuccess(true);

    // Simulate payment processing and redirect after delay
    setTimeout(() => {
      clearCart(); // Clear cart
      navigate("/"); // Redirect to homepage
    }, 2000);
  };

  useEffect(() => {
    if (paymentSuccess) {
      // Additional logic if needed when payment is successful
    }
  }, [paymentSuccess]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Billing Details</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md">
          {cart.map((item) => (
            <div
              key={item.ID}
              className="flex justify-between items-center border-b pb-2 mb-2"
            >
              <div>
                <h4 className="font-semibold">{item.Name}</h4>
                <p className="text-sm text-gray-500">
                  ${item.Price} x {item.quantity}
                </p>
              </div>
              <p className="font-semibold">${item.Price * item.quantity}</p>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* Payment Options */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentType"
              value="Credit Card"
              checked={paymentType === "Credit Card"}
              onChange={(e) => setPaymentType(e.target.value)}
              className="mr-2"
            />
            Credit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentType"
              value="Debit Card"
              checked={paymentType === "Debit Card"}
              onChange={(e) => setPaymentType(e.target.value)}
              className="mr-2"
            />
            Debit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentType"
              value="Net Banking"
              checked={paymentType === "Net Banking"}
              onChange={(e) => setPaymentType(e.target.value)}
              className="mr-2"
            />
            Net Banking
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentType"
              value="UPI"
              checked={paymentType === "UPI"}
              onChange={(e) => setPaymentType(e.target.value)}
              className="mr-2"
            />
            UPI
          </label>
        </div>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handlePayment}
        >
          Make Payment
        </button>
      </div>

      {/* Payment Success Message */}
      {paymentSuccess && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
          Payment successful! Redirecting to the homepage...
        </div>
      )}
    </div>
  );
};

export default BillingPage;
