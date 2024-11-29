import React, { useEffect, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faArrowRightToBracket, faSearch, faShoppingCart, faUser, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { useDarkMode } from './Context/DarkModeContext'
import { useSign } from './Context/SignContext'
import { useCart } from './Context/CartContext'
import { useNavbar } from './Context/NavbarContext'
import debounce from "lodash.debounce";


export const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const {darkMode} = useDarkMode()

  if (!isCartOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full lg:w-96 sm:w-1/2 bb:w-full bg-white transition-all duration-500 ease-in-out shadow-lg z-50 p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-[30px] ${darkMode ? 'text-black' : ''} font-bold`}>Cart</h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-gray-500 text-[20px] hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-[25px] font-kanit mt-[100px] text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="border-b py-4">
              <div className="flex gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className={`${darkMode ? 'text-black' : ''} font-semibold`}>{item.name}</h3>
                  <p className="text-gray-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={`px-2 py-1 ${darkMode ? 'bg-gray-600 ' : 'bg-gray-200 '} rounded`}
                    >
                      -
                    </button>
                    <span className={`${darkMode ? 'text-black' : ''}`}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={`px-2 py-1 ${darkMode ? 'bg-gray-600 ' : 'bg-gray-200 '} rounded`}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span className={`${darkMode ? 'text-black' : ''}`}>Total:</span>
              <span className={`${darkMode ? 'text-black' : ''}`}>${cartTotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => {
                  navigate('/checkout'); 
                  setIsCartOpen(false);   
              }}
              className="w-full bg-main text-white py-2 rounded-lg hover:bg-opacity-90"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export const CartIcon = () => {
  const { cartCount, setIsCartOpen } = useCart();
  
  return (
    <div className="relative mt-2 ml-2 cursor-pointer" onClick={() => setIsCartOpen(true)}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="w-6 h-6 hover:text-main"
      />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartCount}
        </span>
      )}
    </div>
  );
};

const Navbar = () => {

  const navMenu = [
      {name:'home',href:'/'},
      {name:'about',href:'/about_us'},
      {   name:'tour',
          href:'/tour',
          dropdown: [
          { name: 'Vietnam Tours', href: '/tour#vietnam' },
          { name: 'America tour', href: '/tour#america' },
          { name: 'Europe Tours', href: '/tour#europe' },
      ],},
      {name:'blog',href:'/blog_detail'},
      {name:'contact',href:'/contact'},
  ]

  const { darkMode, toggleDarkLight} = useDarkMode();
  const { signUp, setSignUp } = useSign()
  const {colorText, setColorText} = useNavbar()
  const location = useLocation();

  useEffect(() => {
      const currentPath = location.pathname;
      if (currentPath.includes('/tour')) {
        setColorText('tour');
      } else {
        const matchedMenu = navMenu.find(item => item.href === currentPath);
        if (matchedMenu) {
          setColorText(matchedMenu.name); 
        }
      }
    }, [location]); 
    

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
      setMenuOpen(!menuOpen); 
  };    

  const navigate = useNavigate();

  const handleSignUpClick = () => {
      if (signUp) {
          navigate('/profile');
      } else {
          navigate('/sign_up_in/register');
      }
  };

  const getOut = () =>{
      setSignUp(false)
      navigate('/')
  }

  const [dropdown,setDropDown] = useState(false)
  const handleDropdownClick = (href) => {
      setDropDown(false); 
      navigate(href);
  };

  const [searchQuery, setSearchQuery] = useState(''); 
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false); 

  const handleSearch = debounce((query) => {
    setSearchQuery(query);
  }, 300); 

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true); 

    fetch(
      `https://674187c8e4647499008df5c5.mockapi.io/tour_detail?search=${searchQuery}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok"); 
        }
        return response.json();
      })
      .then((data) => {
        const filteredResults = data.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setSearchResults([]); 
      })
      .finally(() => {
        setIsSearching(false);
      });
  }, [searchQuery]);

  const handleResultClick = (id) => {
    navigate(`/tour/${id}`); 
    setSearchQuery("");
    setSearchResults([]);
  };




return (
  <div className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'dark-mode' : 'light-mode'}` } >
      <div className='w-full px-[15px] mx-auto xl:max-w-[1200px] sm:max-w-[540px] lg:max-w-[960px]'>
          <div className='flex items-center h-[90px] justify-between max-w-7xl relative flex-wrap'>
              <div className='font-greatVibes text-[44px]'>Tours</div>
              <div className='flex items-center '>
              <ul className="hidden lg:flex items-center gap-[22px]">
                  {navMenu.map((item, idx) => (
                      <li
                          key={idx}
                          className={`text-base font-semibold cursor-pointer hover:text-main relative 
                              ${colorText === item.name ? 'text-main' : darkMode ? 'text-white' : 'text-text-color'}`}
                          onMouseEnter={() => idx === 2 && setDropDown(true)} 
                          onMouseLeave={() => idx === 2 && setDropDown(false)} 
                      >
                          <Link to={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Link>
                          {idx === 2 && <FontAwesomeIcon className="ml-1 text-[14px]" icon={faAngleDown} />}

                          {idx === 2 && dropdown && (
                              <ul className="absolute top-[30px] left-0 w-[200px] mt-2 bg-[#e1e6ed] shadow-lg rounded-lg p-2 z-20 before:absolute before:top-[-20px] before:left-0 before:w-[40px] before:h-[20px] before:bg-transparent">
                                  {item.dropdown.map((dropdownItem, dropdownIdx) => (
                                      <li
                                          key={dropdownIdx}
                                          className="text-sm text-gray-800 hover:text-main py-1 px-2 cursor-pointer border-b border-gray-300 last:border-none"
                                          onClick={() => handleDropdownClick(dropdownItem.href)}
                                      >
                                          {dropdownItem.name}
                                      </li>
                                  ))}
                              </ul>
                          )}
                      </li>
                  ))}
              </ul>

              <form onSubmit={(e) => e.preventDefault()} className="relative ml-3 lg:block hidden">
                <input
                  className="pt-2 pb-[7px] px-[15px] rounded-tl-[30px] border-r-0 rounded-bl-[30px] outline-none border-[#EEEEEE] border-2 h-full"
                  placeholder="Enter keyword..."
                  onChange={(e) => handleSearch(e.target.value.trim())} 
                />
                <button className="py-[8px] px-[13px] bg-main h-full rounded-tr-[30px] rounded-br-[30px]">
                  <FontAwesomeIcon icon={faSearch} className="text-white" />
                </button>

                {isSearching && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
                    <p className="text-center p-4 text-gray-500">Searching...</p>
                  </div>
                )}
                {!isSearching && searchResults.length > 0 && (
                  <ul className="absolute top-full h-[300px] overflow-y-auto left-0 w-full bg-white shadow-lg z-50 divide-y divide-gray-200">
                    {searchResults.map((item) => (
                      <li
                        key={item.id}
                        className="p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleResultClick(item.id)}
                      >
                        <span className='w-[150px] text-text-color'>{item.name}</span>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="object-cover h-[20px]"
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {!isSearching &&
                  searchQuery &&
                  searchResults.length === 0 && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
                      <p className="text-center p-4 text-gray-500">No results found</p>
                    </div>
                  )}
              </form>
              <div className='ml-[10px] size-6'>
                  <FontAwesomeIcon
                          onClick={toggleDarkLight}
                          icon={darkMode ? faSun : faMoon}
                          className='w-full h-full hover:text-main cursor-pointer'
                  />
              </div>
              <div className='ml-[10px] size-6'>
                  <FontAwesomeIcon
                          onClick={handleSignUpClick}
                          icon={signUp ? faUser : faUserPlus}
                          className='w-full h-full hover:text-main cursor-pointer'
                  />
              </div>
              {signUp ? <CartIcon/> : ''}
              {signUp ? <div className='ml-[10px] size-6'>
                  <FontAwesomeIcon
                          onClick={getOut}
                          icon={faArrowRightToBracket}
                          className='w-full h-full hover:text-main cursor-pointer'
                  />
              </div> : ''}
              <div className='pl-3 lg:hidden'>
                  {menuOpen ? <FontAwesomeIcon
                      icon={faXmark}
                      className='text-2xl cursor-pointer p-5 bg-main rounded-[10px] text-white'
                      onClick={toggleMenu}/>
                        : <FontAwesomeIcon
                      icon={faBars}
                      className='text-2xl cursor-pointer p-5 bg-main rounded-[10px] text-white'
                      onClick={toggleMenu}
                  />}
                  {menuOpen && (
                  <div>
                      <ul
                          className={`absolute top-[90px] sm:right-[-180px] bb:right-[-12px] sm:w-[400px] bb:w-full h-[300px] bg-white shadow-md flex flex-col items-start rounded-bl rounded-b py-4 px-6 z-40 
                              ${darkMode ? 'dark-mode' : 'light-mode'}`}
                      >
                          {navMenu.map((item,idx) => (
                              <li
                                  key={idx}
                                  className={`text-base font-semibold cursor-pointer my-2 hover:text-main 
                                      ${colorText === item.name ? 'text-main' : (darkMode ? 'text-white' : 'text-text-color')}`}
                                  onMouseEnter={() => idx === 2 && setDropDown(true)} 
                                  onMouseLeave={() => idx === 2 && setDropDown(false)} 
                              >
                                  <Link to={item.href}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Link>
                                  {idx === 2 && <FontAwesomeIcon className='ml-1 text-[14px]' icon={faAngleDown} />}
                                  {idx === 2 && dropdown && (
                                    <ul className="absolute top-[60px] left-[85px] w-[200px] mt-2 bg-[#e1e6ed] shadow-lg rounded-lg p-2 z-20 before:absolute before:top-[38px] before:left-[-25px] before:w-[40px] before:h-[20px] before:bg-transparent">
                                        {item.dropdown.map((dropdownItem, dropdownIdx) => (
                                            <li
                                                key={dropdownIdx}
                                                className="text-sm text-gray-800 hover:text-main py-1 px-2 cursor-pointer border-b border-gray-300 last:border-none"
                                                onClick={() => handleDropdownClick(dropdownItem.href)}
                                            >
                                                {dropdownItem.name}
                                            </li>
                                        ))}
                                    </ul>
                                  )}
                              </li>
                          ))}
                          <form onSubmit={(e) => e.preventDefault()} className='w-full flex items-center mt-4'>
                              <input
                                className="pt-2 pb-[7px] px-[15px] rounded-tl-[30px] border-r-0 rounded-bl-[30px] outline-none border-[#EEEEEE] w-full border-2 h-full"
                                placeholder="Enter keyword..."
                                onChange={(e) => handleSearch(e.target.value.trim())} 
                              />
                              <button className="py-[8px] px-[13px] bg-main h-full rounded-tr-[30px] rounded-br-[30px]">
                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                              </button>

                              {isSearching && (
                                <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
                                  <p className="text-center p-4 text-gray-500">Searching...</p>
                                </div>
                              )}
                              {!isSearching && searchResults.length > 0 && (
                                <ul className="absolute top-full h-[300px] overflow-y-auto left-0 w-full bg-white shadow-lg z-50 divide-y divide-gray-200">
                                  {searchResults.map((item) => (
                                    <li
                                      key={item.id}
                                      className="p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
                                      onClick={() => handleResultClick(item.id)}
                                    >
                                      <span className='w-[150px] text-text-color' >{item.name}</span>
                                      <img
                                        src={item.img}
                                        alt={item.name}
                                        className="object-cover h-[20px]"
                                      />
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {!isSearching &&
                                searchQuery &&
                                searchResults.length === 0 && (
                                  <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
                                    <p className="text-center p-4 text-gray-500">No results found</p>
                                  </div>
                                )}
                                            </form>
                                        </ul>
                                    </div>
                                )}
                    </div>
                </div>
          </div>
      </div>
      <Cart />
  </div>
)
}

export default Navbar