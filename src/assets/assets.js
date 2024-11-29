import React from 'react'
import banner1 from '../assets/Slide/banner1.jpg';
import banner2 from '../assets/Slide/banner2.jpg';
import banner3 from '../assets/Slide/banner3.jpg';
import banner4 from '../assets/Slide/banner4.jpg';
import about from '../assets/About/about.jpg'
import hinh1 from '../assets/FeatureTour/s1.jpg'
import hinh2 from '../assets/FeatureTour/s2.jpg'
import hinh3 from '../assets/FeatureTour/s3.jpg'
import hinh4 from '../assets/FeatureTour/s4.jpg'
import hinh5 from '../assets/FeatureTour/s5.jpg'
import hinh6 from '../assets/FeatureTour/s6.jpg'
import map from '../assets/BackGrounds/map.png'
import about2 from '../assets/About/about2.jpg'
import blog1 from '../assets/Blog/blog1.jpg'
import blog2 from '../assets/Blog/blog2.jpg'
import blog3 from '../assets/Blog/blog3.jpg'
import sale from '../assets/BackGrounds/img.jpg'
import bg_signUpIn from '../assets/BackGrounds/bg_sign_up_in.jpg'
import bg_profile from '../assets/BackGrounds/tour-la-gi-2.jpg'
import bg_about from '../assets/BackGrounds/inner-banner.jpg'
import about3 from '../assets/BackGrounds/about3.jpg'
import t1 from '../assets/Agents/team1.jpg'
import t2 from '../assets/Agents/team2.jpg'
import t3 from '../assets/Agents/team3.jpg'
import t4 from '../assets/Agents/team4.jpg'
import loading from '../assets/BackGrounds/loading.jpg'
import blog4 from '../assets/Blog/blog-page4.jpg'

export const assets =  {
  banner1,banner2,banner3,banner4,
  about,about2,about3,
  hinh1,hinh2,hinh3,hinh4,hinh5,hinh6,
  map,
  blog1,blog2,blog3,blog4,
  sale,
  bg_signUpIn,bg_profile,bg_about,
  t1,t2,t3,t4,
  loading,
}

export const tours = [
  {
    id:1,
    image: assets.hinh1,
    title: "Discovery Best Tours",
    location: "Central Park West NY, USA",
    price: "$39.00",
    duration: "10 Days",
    rating: 4.05,
  },
  {
    id:2,
    image: assets.hinh2,
    title: "Dubai – Stunning Places",
    location: "5th Avenue, London",
    price: "$69.00",
    duration: "15 Days",
    rating: 4.05,
  },
  {
    id:3,
    image: assets.hinh3,
    title: "Enquiry Form Only – Italy",
    location: "Henley Street, Italy",
    price: "$39.00",
    duration: "6 Days",
    rating: 4.06,
  },
  {
    id:4,
    image: assets.hinh4,
    title: "Switzerland – best Zurich",
    location: "Zermatt, USA",
    price: "$49.00",
    duration: "7 Days",
    rating: 4.05,
  },
  {
    id:5,
    image: assets.hinh5,
    title: "America – Lake Tahoe",
    location: "Figueroa Mountain Road, USA",
    price: "$59.00",
    duration: "12 Days",
    rating: 4.07,
  },
  {
    id:6,
    image: assets.hinh6,
    title: "Paris – Eiffel Tower",
    location: "Northern central France, Paris",
    price: "$69.00",
    duration: "15 Days",
    rating: 4.08,
  },
];


export const formFields = [
  { label: "Date from:", type: "date" },
  { label: "Destinations", type: "select", options: ["Select Location", "London", "Italy", "VietNam", "America"] },
  { label: "Activity:", type: "select", options: ["Select Any", "Beach", "City Tours", "Cruises", "Discovery"] },
  { label: "Guests:", type: "select", options: ["0", "1", "2", "3", "4", "5", "6"] },
];


export const blogs = [
  {
      image:assets.blog1,
      coursePriceBadge:'TRIPS',
      name:'John',
      tym:23,
      date:' Dec 06, 2021',
      title:'Travel the Most Beautiful Places in the World',
      des:'I recently used this amazing service to explore some of the most beautiful destinations around the world. The experience was seamless, and every detail was taken care of. Highly recommend for anyone looking to make their travels unforgettable!'
  },
  {
      image:assets.blog2,
      coursePriceBadge:'Travels',
      name:'Anton',
      tym:24,
      date:' Dec 06, 2025',
      title:'A Place where Start New Life with Peace',
      des:"After using the service, I discovered a serene destination that offers the perfect balance of tranquility and adventure. It’s the ideal place to reset, recharge, and begin a new chapter in life. The journey was smooth, and the service made every step of the way stress-free. Highly recommend this peaceful retreat for anyone seeking a fresh start."
  },
  {
      image:assets.blog3,
      coursePriceBadge:'Journey',
      name:'Miche',
      tym:25,
      date:' Dec 09, 2023',
      title:'Top 10 Destinations & Adventure Trips',
      des:"Looking for the ultimate adventure? These top 10 destinations will take you off the beaten path and into some of the world’s most thrilling locations. From mountain treks to jungle safaris, these trips offer adrenaline-pumping experiences and breathtaking views. If you're ready for an unforgettable adventure, these are the places to go!"
  },
]


export const agents = [
  {
    img:assets.t1,
    name:'Lern Victor',
  },
  {
    img:assets.t2,
    name:'Meyer Lson',
  },
  {
    img:assets.t3,
    name:'Ali Meyer',
  },
  {
    img:assets.t4,
    name:'Sam Mills',
  }
]

export const blogC = [
  {
    title: 'Travel Direction',
    num: 4,
  },
  {
    title: 'Destinations',
    num: 8,
  },
  {
    title: 'Tour Trips',
    num: 8,
  },
  {
    title: 'Trips',
    num: 3,
  },
]

export const abc = [
  {
    img:'https://p.w3layouts.com/demos_new/template_demo/05-02-2022/tours-liberty-demo_Free/1559675193/web/assets/images/blog-s1.jpg',
    title:'But I spend time like',
    date:'Feb 13, 2021'
  },
  {
    img:'https://p.w3layouts.com/demos_new/template_demo/05-02-2022/tours-liberty-demo_Free/1559675193/web/assets/images/blog-s4.jpg',
    title:'But I spend time like',
    date:'Oct 12, 2021'
  },
  {
    img:'https://p.w3layouts.com/demos_new/template_demo/05-02-2022/tours-liberty-demo_Free/1559675193/web/assets/images/blog-s3.jpg',
    title:'But I spend time like',
    date:'Feb 1, 2021'
  },
  {
    img:'https://p.w3layouts.com/demos_new/template_demo/05-02-2022/tours-liberty-demo_Free/1559675193/web/assets/images/blog-s2.jpg',
    title:'But I spend time like',
    date:'Feb 9, 2027'
  },
]