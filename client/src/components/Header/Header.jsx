import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/Logo_cromwell.svg";
import "./Header.css";

export const Header = () => {
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  return (
    <div>
      <div className="navContainer">
        <div className="navWrapper">
          <div className="logoDiv">
            <Link to={"/"} className="logoLink">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="navBar">
            <div className="navItems">
              <FontAwesomeIcon className="navIcon" icon={faStar} />
              <h5 className="account">Favourites</h5>
            </div>
            {token ? (
              <div className="navItems">
                <Link to={"/user/profile"} className="accountLink">
                  <FontAwesomeIcon className="navIcon" icon={faUser} />
                  <h5 className="account">My Account</h5>
                </Link>
              </div>
            ) : (
              <div className="navItems">
                <Link to={"/user/login"} className="accountLink">
                  <FontAwesomeIcon className="navIcon" icon={faUser} />
                  <h5 className="account">Login/Register</h5>
                </Link>
              </div>
            )}

            <div className="navItems">
              <FontAwesomeIcon className="navIcon" icon={faCartShopping} />
              <h5 className="account">Basket</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
