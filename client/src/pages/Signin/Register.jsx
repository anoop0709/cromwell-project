import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Inputfield } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faLock,
  faHome,
  faCircleXmark,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components/Footer/Footer";
import { userRegisterInput } from "../../assets/config/inputConfig";
import { registerUser } from "../../actions/apiActions";

export const Register = () => {
  const [inpValues, setInputvalues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const errorFromSignUp = useSelector((state) => state?.Registration?.error);
  const successMessage = useSelector((state) => state?.Registration?.successMessage);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const confirmPassword = {
    id: "5",
    type: "password",
    name: "confirmpassword",
    label: "Confirm Password:",
    placeholder: "Confirm password",
    errMessage: "Confirm password not match",
    required: "true",
    pattern: inpValues.password,
  };

  const onChange = (e) => {
    setInputvalues({ ...inpValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(inpValues));
  };

  useEffect(() => {
    if (errorFromSignUp) {
      setShowError(true);
      const errTimer = setTimeout(() => {
        dispatch({ type: "REGISTERERROR", payload: null });
      }, 5000);

      return () => {
        clearTimeout(errTimer);
        setShowError(false);
      };
    }
  }, [errorFromSignUp]);


  useEffect(() => {
    if (successMessage) {
      setShowSuccess(true);
      const successTimer = setTimeout(() => {
        dispatch({ type: "REGISTERSUCCESS", payload: null });
      }, 5000);

      return () => {
        clearTimeout(successTimer);
        setShowSuccess(false);
        Navigate('/user/login');
      };
    }
  }, [successMessage]);
  
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
          <p>Register</p>
        </div>
        {showError && ( 
          <div className="errorContainer">
            <div className="errorWrapper">
              <div className="errorMessage">
                <FontAwesomeIcon icon={faCircleXmark} className="errorIcon" />
                <p>{errorFromSignUp?.message}</p>
              </div>
              <div className="borderLine"></div>
            </div>
          </div>
         )}  
         {showSuccess && ( 
          <div className="successContainer">
            <div className="successWrapper">
              <div className="successMessage">
                <FontAwesomeIcon icon={faCheckCircle} className="successIcon" />
                <p>{successMessage}</p>
              </div>
              <div className="borderLineSuccess"></div>
            </div>
          </div>
        )}
        <div className="signInWrapper">
          <div className="signinbox">
            <div className="signInform">
              <form onSubmit={handleSubmit}>
                <div className="loginTxt">
                  <FontAwesomeIcon icon={faLock} className="logIcon" />
                  <h2>Register</h2>
                </div>
                {userRegisterInput.map((input) => (
                  <Inputfield key={input.id} {...input} onChange={onChange} />
                ))}
                <Inputfield
                  key={confirmPassword.id}
                  {...confirmPassword}
                  onChange={onChange}
                />
                <div className="formBtn">
                  <button type="submit" data-testid="signin">Sign in</button>
                </div>
              </form>
              <div className="registerTxt">
                <p>Already have an account ?</p>
                <Link to={"/user/login"} className="linkToRegister">
                  Login to your Account.
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
