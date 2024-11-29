import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useSign } from "./Context/SignContext";
import { useCart } from "./Context/CartContext";

function TourDetail() {
  const { id } = useParams(); 
  const { signUp } = useSign();
  const {addToCart} = useCart()
  const [tour, setTour] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleAddCart = (tour) => {
    if (!signUp) {
      setShowModal(true);
    } else {
      addToCart(tour)
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    fetch(`https://674187c8e4647499008df5c5.mockapi.io/tour_detail/${id}`)
      .then((response) => response.json())
      .then((data) => setTour(data))
      .catch((error) => console.error("Error fetching tour details:", error));
  }, [id]);

  if (!tour) {
    return (
        <>
            <Navbar/>
            <div className="relative h-screen flex justify-center items-center">
                <img src={assets.loading} />
            </div>
        </>
    );
  }

  return (
    <>
        <Navbar/>
        <div className="mt-[90px] relative">
          <div className="font-kanit text-[60px] text-center pb-10 pt-5 ">Tour Detail</div>
          <div className="grid items-center gap-12 sm:grid-cols-2 bb:grid-cols-1 w-[80%] mx-auto mb-[30px]">
              <img className="rounded-md " src={tour.img} alt={tour.name} />
              <div>
                  <h1 className="text-[40px] leading-[46px] font-Ubuntu pb-8">{tour.name}</h1>
                  <p className="text-[20px] mb-5 font-Ubuntu"><FontAwesomeIcon icon={faLocationDot}/>&nbsp;: {tour.Location}</p>
                  <p className="text-[16px] font-Ubuntu mb-5"><FontAwesomeIcon className="pr-3" icon={faClock}/>{tour.duration} Days</p>
                  <div className="flex items-center">
                    <p><FontAwesomeIcon className="pr-3" icon={faMoneyBill}/> ${tour.price}.00</p>
                    <button onClick={() =>handleAddCart(tour)} className="bg-yellow-300 ml-8 p-3 rounded-lg hover:bg-transparent transition-all duration-[1800ms] ease-in-out hover:border-main border-2">Add to cart</button>
                  </div>
              </div>
              <p className="font-kanit text-[20px] mb-10">{tour.des}</p>
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
        <Footer/>
    </>
   
  );
}

export default TourDetail;
