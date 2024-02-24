import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Inputfield } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLock } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components/Footer/Footer";

export const Register = () => {
  const [inpValues, setInputvalues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const userRegisterInput = [
    {
      id: "1",
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      errMessage:
        "First name should be 3-16 characters and shouldn't be used any special charcters",
      required: "true",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: "2",
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      errMessage:
        "Last name should be 3-16 characters and shouldn't be used any special characters",
      required: "true",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: "3",
      type: "email",
      name: "email",
      placeholder: "Email",
      errMessage: "Should be a valid email",
      required: "true",
      pattern:
        "^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    },
    {
      id: "4",
      type: "password",
      name: "password",
      placeholder: "Password",
      errMessage:
        "Password should be minimum 8 characters and include uppercase, lowercase, number and special character",
      required: "true",
      pattern:
        "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=])(?=.*[0-9]).*$",
    },
    {
      id: "5",
      type: "password",
      name: "confirmpassword",
      placeholder: "Confirm password",
      errMessage: "Confirm password not match",
      required: "true",
      pattern: inpValues.password,
    },
  ];
  const onChange = (e) => {
    setInputvalues({ ...inpValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="signInContainer">
        <div className="navigation">
          <Link to={"/"} className="linkToHome">
            Home
          </Link>
          <FontAwesomeIcon icon={faGreaterThan} className="gtIcon" />
          <p>Register</p>
        </div>
        <div className="signInWrapper">
          <div className="signinbox">
            <div className="signInform">
              <form onSubmit={handleSubmit}>
                <div className="loginTxt">
                  <FontAwesomeIcon icon={faLock} className="logIcon" />
                  <h2>Register</h2>
                </div>
                { userRegisterInput.map((input) => (   
                  <Inputfield key={input.id} {...input} onChange={onChange} />
                ))}

                <div className="formBtn">
                  <button  type="submit">Sign in</button>
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
