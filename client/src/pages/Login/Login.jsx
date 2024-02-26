import "./Login.css";
import { userLoginInput } from "../../assets/config/inputConfig";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Inputfield } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faLock,
  faHome,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components/Footer/Footer";
import { logIn } from "../../actions/apiActions";

export const Login = () => {
  const [inpValues, setInputvalues] = useState({
    email: "",
    password: "",
  });
  const errorFromLogIn = useSelector((state) => state?.Authorization?.error);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userToken = JSON.parse(localStorage.getItem('profile'))?.token;
  
  const onChange = (e) => {
    setInputvalues({ ...inpValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(inpValues, Navigate));
  };
  
  useEffect(() => {
    if (userToken) Navigate('/');
  },[]);

  useEffect(() => {
    if (errorFromLogIn) {
      setShowError(true);
      const errTimer = setTimeout(() => {
        dispatch({ type: "USERAUTHERROR", payload: null });
      }, 5000);

      return () => {
        clearTimeout(errTimer);
        setShowError(false);
      };
    }
  }, [errorFromLogIn]);

  return (
    <>
      <Header />
      <div className="signInContainer">
        <div className="navigation">
          <FontAwesomeIcon icon={faHome} className="gtIcon" />
          <Link to={"/"} className="linkToHome">
            Home
          </Link>
          <FontAwesomeIcon icon={faGreaterThan} className="gtIcon" />
          <p>Login</p>
        </div>
        {showError && (
          <div className="errorContainer">
            <div className="errorWrapper">
              <div className="errorMessage">
                <FontAwesomeIcon icon={faCircleXmark} className="errorIcon" />
                <p>{errorFromLogIn?.message}</p>
              </div>
              <div className="borderLine"></div>
            </div>
          </div>
        )} 
        <div className="signInWrapper">
          <div className="signinbox">
            <div className="signInform">
              <form onSubmit={handleSubmit}>
                <div className="loginTxt">
                  <FontAwesomeIcon icon={faLock} className="logIcon" />
                  <h2>Log In</h2>
                </div>
                {userLoginInput.map((input) => (
                  <Inputfield key={input.id} {...input} onChange={onChange} />
                ))}

                <div className="formBtn">
                  <button type="submit"> Log in</button>
                </div>
              </form>
              <div className="registerTxt">
                <p>Not Purchased from us before ?</p>
                <Link to={"/user/register"} className="linkToRegister">
                  Register an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
