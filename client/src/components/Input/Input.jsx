import "./Input.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Inputfield = (props) => {
  const { label, id, errMessage, onChange, type, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div>
      <div className="inputField">
        <label>{label}</label>
        <div className="inputDiv">
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() => {
              inputProps.name === "confirmpassword" && setFocused(true);
            }}
            focused={focused.toString()}
            type={(function () {
              if (type === "password" && !showPassword) {
                return "password";
              } else if (type === "email") {
                return "email";
              } else {
                return "text";
              }
            })()}
          />
          {type === "password" && label !== "Confirm Password:" && (
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="showPassword"
              onClick={handleShowPassword}
            />
          )}
          <span>{errMessage}</span>
        </div>
      </div>
    </div>
  );
};
