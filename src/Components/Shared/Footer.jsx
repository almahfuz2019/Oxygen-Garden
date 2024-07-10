import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#212121] py-24 px-4 lg:px-0">
      <div className="max-w-screen-xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 lg:gap-2 gap-16">
          {/* grid 1  */}
          <div className="flex flex-col items-start lg:items-center">
            <img
              src="https://i.ibb.co/bK9KHTV/Frame-20-removebg-preview-2.png"
              alt=""
            />
            <p className="mb-8 font-normal text-lg text-white">Food Service</p>
            <Link
              to=""
              className="bg-transparent text-white border border-white  font-semibold text-lg   rounded-lg px-[23px] py-[12px]"
            >
              Sign In
            </Link>{" "}
            {/* Social Icons */}
            <div className="flex mb-4 mt-8 ">
              <Link to="#" className=" mx-2 text-2xl text-primary">
                <FaFacebookF />
              </Link>
              <Link to="#" className=" mx-2 text-2xl text-primary">
                <FaTwitter />
              </Link>
              <Link to="#" className=" mx-2 text-2xl text-primary">
                <FaInstagram />
              </Link>
              <Link to="#" className=" mx-2 text-2xl text-primary">
                <FaLinkedinIn />
              </Link>
            </div>
            {/* Language Selector */}
            <div className="flex items-center mb-4 md:mb-0 mt-6 border border-white py-2 px-4">
              <img
                src="https://i.ibb.co/tM17Z9G/image-2.png"
                className="text-white mr-2"
              />
              <select className="bg-transparent text-white py-3 px-6 rounded">
                <option className="bg-transparent text-black">English</option>
                <option className="bg-transparent text-black">Français</option>
              </select>
            </div>
          </div>
          {/* grid 2  */}
          <div>
            <div className="text-lg text-white ">
              <p className="text-[#FFFFFFBF] text-lg font-normal Lato">
                Explore
              </p>
              <h3 className="text-2xl font-bold mb-8 mt-4 text-primary ">
                Our Products
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    New Products{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Our Brands{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Food Products{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Supply Products{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Explore Goodfinds{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* grid 3  */}
          <div>
            <div className="text-lg text-white ">
              <p className="text-[#FFFFFFBF] text-lg font-normal Lato">Run</p>
              <h3 className="text-2xl font-bold mb-8 mt-4 text-primary ">
                Your Business
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Ordering & Delivery{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Menu & Business Solution{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Nutrition & Consulting{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* grid 4  */}
          <div>
            <div className="text-lg text-white ">
              <p className="text-[#FFFFFFBF] text-lg font-normal Lato">Get</p>
              <h3 className="text-2xl font-bold mb-8 mt-4 text-primary ">
                Inspired
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Our Shows{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Trends & Ideas{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-green-500 flex items-center leading-none gap-1"
                  >
                    Recipes{" "}
                    <span>
                      <img
                        src="https://i.ibb.co/R3z2Ymf/Mask-group-10.png"
                        alt=""
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* grid 5  */}
          <div className=" shadow-2xl shadow-black text-white text-lg Lato text-center p-4 rounded-lg border flex flex-col justify-between border-[#FFFFFF0D]">
            <p>
              For over 125 years, we’ve delivered the excellence, expertise, and
              quality products our customers need to design successful food
              operations
            </p>
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded mt-4 text-sm">
              Become our customer
            </button>
          </div>
        </div>
        {/* Footer Links */}

        <div className="lg:text-center mt-28  text-lg Lato leading-[26px] text-white">
          <p className="mb-6">
            © 2024 Oxygen Garden Service. All Rights Reserved.
          </p>
          <div className="mt-2 flex lg:justify-center flex-wrap gap-y-5">
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Our Markets
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Locations
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Careers
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Vendor Submission Form
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Modern Slavery Report
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Contact Us
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Terms of Use
            </Link>
            <Link
              to="#"
              className="hover:text-green-500 mr-3 pr-3 border-l-1 border border-l-0 border-y-0"
            >
              Sitemap
            </Link>
          </div>
          <div className="mt-10 flex justify-center items-center gap-2">
            <img
              src="https://i.ibb.co/YT20Djc/Frame-63.png"
              alt=""
              className=""
            />
            <Link
              to="#"
              className=" hover:text-green-500 leading-none"
            >
              <span className="leading-none">Your Privacy Choices</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
