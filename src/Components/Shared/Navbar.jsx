import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Style for navigation items
  const navItemStyle =
    "text-base font-normal leading-[19px] tracking-wide text-[#F5F5F5] transition-colors duration-200 hover:text-deep-purple-accent-400 Ubuntu";

  return (
    <div className=" relative z-50">
      {/* Navbar for Desktop */}
      <div className="mx-auto max-w-screen-xl  ">
        <div className="px-4 mx-auto  lg:block hidden">
          <div className="flex items-center justify-between  lg:space-x-16">
            {/* Logo */}
            <Link
              to="/"
              aria-label="Logo"
              title="Logo"
              className="inline-flex  items-center"
            >
              <img src={logo} alt="logo" />
            </Link>
            {/*navigation items */}
            <ul className="items-center hidden space-x-8 md:flex">
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={navItemStyle}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  aria-label=" About Us"
                  title=" About Us"
                  className={navItemStyle}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-products"
                  aria-label="Our Products"
                  title="Our Products"
                  className={navItemStyle}
                >
                  Our Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-market"
                  aria-label="Our Market"
                  title="Our Market"
                  className={navItemStyle}
                >
                  Our Market
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  aria-label="Contact"
                  title="Contact"
                  className={navItemStyle}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* button  */}
            <div className="bg-white transition hover:scale-110 hover:shadow-xl">
              <Link
                to="/"
                className="text-lg text-primary bg-white font-semibold px-[23px] py-[10px] rounded-[5px] Lato "
              >
                Become our customer
              </Link>
            </div>
          </div>
        </div>

        {/* Navbar for Tablet and Phone */}
        <nav className="bg-primary block shadow lg:hidden absolute left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto shadow px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center font-bold">
                  <img
                    src={logo}
                    className=""
                    alt="Logo"
                  />
                </Link>
              </div>

              {/* Mobile menu toggle button */}
              <div className="-mr-2 flex lg:hidden">
                <button
                  onClick={toggleNavbar}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 text-white hover:text-black focus:text-black"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger menu icon */}
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Close menu icon */}
                  <svg
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`transform transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden lg:hidden`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  bg-[#F5F5f5F7]">
              {/* Mobile menu items */}
              <NavLink
                exact
                to="/"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                About Us
              </NavLink>
              <NavLink
                to="/"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Our Products
              </NavLink>
              <NavLink
                to="/"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Our Market
              </NavLink>
              <NavLink
                to="/"
                className="block px-3 py-2 text-base font-medium"
                activeClassName="text-orange-500"
              >
                Contact
              </NavLink>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
