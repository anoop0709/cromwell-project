import "./Login.css";
import { userLoginInput } from "../../assets/config/inputConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Inputfield } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLock } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components/Footer/Footer";

export const Login = () => {
  const Navigate = useNavigate();
  const [inpvalues, setInputvalues] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setInputvalues({ ...inpvalues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegister = () => {
    Navigate("/user/register");
  };

  const homePage = () => {
    Navigate("/");
  };
  return (
    <>
      <Header />
      <div className="signInContainer">
        <div className="navigation">
          <p onClick={homePage}>Home</p>
          <FontAwesomeIcon icon={faGreaterThan} className="gtIcon" />
          <p>Login</p>
        </div>
        <div className="signInWrapper">
          <div className="signinbox">
            <div className="signInform">
              <form onSubmit={handleSubmit}>
                <div className="loginTxt">
                  <FontAwesomeIcon icon={faLock} className="logIcon" />
                  <h2>Log In</h2>
                </div>

                {/* {Error && (
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ color: 'red', margin: '5px' }}>{Error}</p>
                  </div>
                )} */}
                {userLoginInput.map((input) => (
                  <Inputfield key={input.id} {...input} onChange={onChange} />
                ))}

                <div className="formBtn">
                  <button type="submit"> Log in</button>
                </div>
              </form>
              <div className="registerTxt">
                <p>
                  Not Purchased from us before ?
                  <span onClick={handleRegister}>Register an Account</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
