import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sale from './Sale';
import { assets } from '../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from './Context/DarkModeContext';
import { useSign } from './Context/SignContext';
import { useCart } from './Context/CartContext';

const TourSection = ({ id, title, tours }) => {
  const { darkMode } = useDarkMode();
  const {signUp} = useSign()
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef(null);

  const handleAddCart = (tour) => {
    if (!signUp) {
      setShowModal(true);
    } else {
      addToCart(tour)
    }
  };

  return (
    <div id={id} ref={sectionRef} className="my-4 scroll-mt-[90px]">
      <h2 className="font-greatVibes text-center text-[50px]">{title}</h2>
      <div className="grid gap-3 mx-3 lg:grid-cols-4 sm:grid-cols-2 bb:grid-cols-1">
        {tours.map((tour) => (
          <div key={tour.id} className="group p-4 border rounded-lg shadow-lg">
            <img
              src={tour.img}
              alt={tour.name}
              className="rounded-md cursor-pointer w-full h-[200px] object-cover mb-4 group-hover:scale-105 transition-transform duration-300 ease-linear"
            />
            <div className='h-[60px]'>
              <Link to={`/tour/${tour.id}`} className="text-[20px] h-full font-bold mb-2 hover:text-main">
                {tour.name}
              </Link>
            </div>
            <p className={`${darkMode ? 'text-[#c1bdbd]' : 'text-gray-700'} text-sm mb-2`}>
              {tour.Location}
            </p>
            <p className={`${darkMode ? 'text-[#c1bdbd]' : 'text-gray-700'} text-sm mb-2`}>
              Duration: {tour.duration} days
            </p>
            <div className="flex items-center justify-between">
              <p className={`${darkMode ? 'text-[#c1bdbd]' : 'text-gray-700'} text-sm mb-4`}>
                Price: ${tour.price}
              </p>
              <button
                onClick={() =>handleAddCart(tour)}
                className={`${darkMode ? 'bg-[#dd5353]' : 'bg-red-300'} p-3 rounded-lg`}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-1/3 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <h2 className="text-lg font-semibold mb-4 text-black">
              You need to log in to book a tour
            </h2>
            <Link
              to="/sign_up_in/login"
              className="block text-center bg-main text-white py-2 px-4 rounded-lg"
            >
              OK
            </Link>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-center text-red-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Tours = () => {
  const [tours, setTours] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('https://674187c8e4647499008df5c5.mockapi.io/tour_detail')
      .then((response) => response.json())
      .then((data) => setTours(data))
      .catch((error) => console.error('Error fetching tours:', error));
  }, []);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 10);
    }
  }, [location.hash, tours]);

  if (!tours.length) {
    return (
      <>
        <Navbar />
        <div className="relative h-screen flex justify-center items-center">
          <img src={assets.loading} alt="Loading..." />
        </div>
      </>
    );
  }

  const vietnamTours = tours.filter((tour) => 13 >= parseInt(tour.id, 10) && parseInt(tour.id, 10) >= 7);
  const europeIds = [2, 3, 6, 14, 15, 16, 17];
  const europeTours = tours.filter((tour) => europeIds.includes(parseInt(tour.id, 10)));
  const americaIds = [1, 5, 18, 19, 20, 21];
  const americaTours = tours.filter((tour) => americaIds.includes(parseInt(tour.id, 10)));

  return (
    <>
      <Navbar />
      <div className="mt-[90px] relative">
        <TourSection id="vietnam" title="Vietnam Tour" tours={vietnamTours} />
        <div className='py-[30px]'/>
        <TourSection id="europe" title="Europe Tour" tours={europeTours} />
        <div className='py-[30px]'/>
        <TourSection id="america" title="America Tour" tours={americaTours} />
      </div>
      <Sale />
      <Footer />
    </>
  );
};

export default Tours;
