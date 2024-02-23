import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo/Logo_cromwell.svg';
import './Navbar.css';


export const Navbar = () => {
    const Navigate = useNavigate();

      const handleLogin = () => {
        Navigate('/user/login')
      }
      const homePage = () => {
        Navigate("/")
      }
    return (
        <div>
          <div className="navContainer">
            <div className="navWrapper">
                <div className='logoDiv'>
                 <img src = {Logo} alt= "" onClick={homePage}/>
                </div>
             
              {/* {user ? (
                <div className="Navitems">
                  <div className="wishCount">
                  <div className="wish">{count}</div>
                  <FontAwesomeIcon className="navicon" icon={faBell} onClick={wishlist}/>
                  </div>
                  <FontAwesomeIcon className="navicon" icon={faWallet} onClick={wallet}/>
                  <ProfilePop user={user} logout={logout} settings={settings} />
                </div>
              ) : ( */}
                <div className="navItems">
                  <FontAwesomeIcon className='navIcon' icon={faUser} onClick={handleLogin}/>
                  <h5 className="account" onClick={handleLogin}>My Account</h5>
                </div>
    
            </div>
          </div>
        </div>
      )
}