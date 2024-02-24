import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo/Logo_cromwell.svg";
import "./Header.css";

export const Header = () => {
  const Navigate = useNavigate();

  const handleLogin = () => {
    Navigate("/user/login");
  };
  const homePage = () => {
    Navigate("/");
  };
  return (
    <div>
      <div className="navContainer">
        <div className="navWrapper">
          <div className="logoDiv">
            <img src={Logo} alt="" onClick={homePage} />
          </div>
          <div className="navBar">
            <div className="navItems">
              <FontAwesomeIcon className="navIcon" icon={faStar} />
              <h5 className="account" >
                Favourites
              </h5>
            </div>
            <div className="navItems">
              <FontAwesomeIcon
                className="navIcon"
                icon={faUser}
                onClick={handleLogin}
              />
              <h5 className="account" onClick={handleLogin}>
                My Account
              </h5>
            </div>
            <div className="navItems">
              <FontAwesomeIcon className="navIcon" icon={faCartShopping} />
              <h5 className="account">
                Basket
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
