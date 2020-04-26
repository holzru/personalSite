import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <footer className="flex flex-col items-center bg-gray-900 py-4 outer-grid text-center">
      <p className="text-white opacity-25 mt-6">
        © 2020 Russell Holz. All rights reserved. Software Engineer, Product Manager, and wearer of many hats.
      </p>
      <ul className="flex mt-8 mb-8" onMouseLeave={() => setHoverItem(null)}>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "github"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("github")}
        >
          <a href="https://github.com/holzru">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaGithub className="w-6 h-6" />
            </div>
          </a>
        </li>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "linkedin"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("linkedin")}
        >
          <a href="https://www.linkedin.com/in/russellholz/">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaLinkedinIn className="w-6 h-6" />
            </div>
          </a>
        </li>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "instagram"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("instagram")}
        >
          <a href="https://www.instagram.com/russell_holz/">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaInstagram className="w-6 h-6" />
            </div>
          </a>
        </li>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "email"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("email")}
        >
          <a href="mailto:holzru@gmail.com">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaEnvelope className="w-6 h-6" />
            </div>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
