import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-50 px-[8vw] pt-12 pb-5">
      <div className="grid grid-cols-1 gap-10 min-[901px]:grid-cols-[2fr_1fr_1fr] min-[901px]:gap-15">
        {/* About */}
        <div className="footer-about text-center min-[901px]:text-left">
          <img
            src={assets.logo}
            alt="Prescripto logo"
            loading="lazy"
            className="mx-auto mb-5 w-37.5 min-[901px]:mx-0"
          />

          <p className="leading-[1.8] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta
            cupiditate fugit culpa rem laudantium.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links text-center min-[901px]:text-left">
          <h3 className="mb-5 text-lg text-gray-800">COMPANY</h3>

          <ul className="list-none space-y-3 p-0">
            <li>
              <Link
                to="/"
                className="text-gray-600 transition-colors duration-300 hover:text-black"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-600 transition-colors duration-300 hover:text-black"
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                to="/delivery"
                className="text-gray-600 transition-colors duration-300 hover:text-black"
              >
                Delivery
              </Link>
            </li>

            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-600 transition-colors duration-300 hover:text-black"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact text-center min-[901px]:text-left">
          <h3 className="mb-5 text-lg text-gray-800">GET IN TOUCH</h3>

          <address className="flex flex-col items-center gap-3 not-italic min-[901px]:items-start">
            <a
              href="tel:+2011245577954"
              className="text-gray-600 transition-colors duration-300 hover:text-black"
            >
              +20 11245577954
            </a>

            <a
              href="mailto:prescripto@example.com"
              className="text-gray-600 transition-colors duration-300 hover:text-black"
            >
              prescripto@example.com
            </a>
          </address>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 h-px border-0 bg-gray-300" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500">
        © 2026 Prescripto. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
