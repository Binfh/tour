import React, { useEffect, useState } from 'react';
import { useCart } from './Context/CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavbar } from './Context/NavbarContext';

const Checkout = () => {
  const { cartItems, cartTotal, resetCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { setColorText} = useNavbar()
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    setShowSuccessModal(true);
  };

  useEffect(() => {
    setColorText('')
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Navbar/>
        <div className="container mx-auto p-6">
          <h1 className="text-6xl font-greatVibes font-medium mb-6">Checkout</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-3 items-center gap-4 border-b py-4">
                <div className="col-span-2 flex flex-col">
                  <span className="text-[20px] font-medium">{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <img
                  className="col-span-1 object-cover rounded w-full h-[100px]"
                  src={item.img}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
          <div className="font-bold text-xl mb-6">Total: ${cartTotal.toFixed(2)}</div>
          <div className="mb-6">
            <h2 className="text-2xl mb-4">Choose Payment Method</h2>
            <div className="grid bb:grid-cols-1 sm:grid-cols-3 w-1/2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                  className="mr-2 cursor-pointer"
                />
                Credit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                  className="mr-2 cursor-pointer"
                />
                PayPal
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="mr-2 cursor-pointer"
                />
                Bank Transfer
              </label>
            </div>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="bg-main text-white px-6 py-3 rounded-lg"
          >
            Confirm Payment
          </button>

          {showSuccessModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold text-green-600 mb-4">Order Successful!</h2>
                <p className={`mb-6 text-black`}>
                  Thank you for your order. We will contact you as soon as possible
                </p>
                <button
                  onClick={() => {
                    setShowSuccessModal(false);
                    navigate("/");
                    resetCart();
                  }}
                  className="bg-main text-white px-6 py-3 rounded-lg"
                >
                  Go home
                </button>
              </div>
            </div>
          )}
        </div>
        <Footer/>
    </>
  );
};

export default Checkout;