import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Sign In */}
          

          {/* Explore, Run, Get Inspired Sections */}
          <div className="md:w-2/4 mb-8 md:mb-0 flex flex-wrap justify-between">
            <div className="w-1/3 mb-4">
              <h3 className="text-lg font-bold mb-2">Explore</h3>
              <ul>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    New Products
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Our Brands
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Food Products
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Supply Products
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Explore Goodfinds
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/3 mb-4">
              <h3 className="text-lg font-bold mb-2">Run Your Business</h3>
              <ul>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Ordering & Delivery
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Menu & Business Solution
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Nutrition & Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/3 mb-4">
              <h3 className="text-lg font-bold mb-2">Get Inspired</h3>
              <ul>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Our Shows
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Trends & Ideas
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-500">
                    Recipes
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Side Content */}
          <div className="md:w-1/4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p>
                For over 125 years, we’ve delivered the excellence, expertise,
                and quality products our customers need to design successful
                food operations
              </p>
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded mt-4">
                Become our customer
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-col  mt-10">
         
          
         
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
