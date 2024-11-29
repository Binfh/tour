import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider';
import FormFindTour from './FormFindTour';
import AboutUsContent from './AboutUsContent';
import FeaturedTours from './FeaturedTours';
import Map from './Map';
import Services from './Services';
import Reasons from './Reasons';
import Blog from './Blog';
import Sale from './Sale';
import Footer from './Footer';


const Home = () => {
  return (
    <>
        <Navbar />
        <Slider />
        <FormFindTour />
        <AboutUsContent/>
        <FeaturedTours />
        <Map />
        <Services />
        <Reasons />
        <div className='my-2 mx-auto block'></div>
        <Blog />
        <Sale />
        <Footer />
    </>
  )
}

export default Home