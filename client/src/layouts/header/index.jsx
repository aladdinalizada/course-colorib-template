import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/image/logo.png";
import phonecall from "../../assets/image/phone-call.svg";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Person's image" />
            <h1>COURSE</h1>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Courses</Link>
              </li>
              <li>
                <Link>Elements</Link>
              </li>
              <li>
                <Link>News</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="callNumber">
            <img src={phonecall} alt="phone-call" />
            <a href="tel:+43 4566 7788 2457">
              <p>+43 4566 7788 2457</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
