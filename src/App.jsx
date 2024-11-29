
import './App.css'
import {Routes, Route } from 'react-router-dom';
import Sign_Up_In from './components/Sign_Up_In';
import Profile from './components/Profile';
import Home from './components/Home';
import { DarkModeProvider } from './components/Context/DarkModeContext';
import AboutUs from './components/AboutUs';
import TourDetail from './components/TourDetail';
import Tours from './components/Tours';
import { SignProvider } from './components/Context/SignContext';
import { CartProvider } from './components/Context/CartContext';
import Checkout from './components/CheckOut';
import { NavbarProvider } from './components/Context/NavbarContext';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';


function App() {

    return (
        <SignProvider>
            <DarkModeProvider>
                <CartProvider>
                    <NavbarProvider>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about_us' element={<AboutUs/>}/>
                            <Route path='/sign_up_in/:form' element={<Sign_Up_In/>} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/tour/:id" element={<TourDetail />} />
                            <Route path="/tour" element={<Tours />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/blog_detail" element={<BlogDetail />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </NavbarProvider>
                </CartProvider>
            </DarkModeProvider>
        </SignProvider>
    );
}


export default App
