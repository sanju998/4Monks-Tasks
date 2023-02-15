import React, { useState } from "react";
import "./CustomInput.css";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function CustomInput(props) {
  const [value, setValue] = useState("");
  const [passwordType, setPasswordType] = useState(props.type);
 
  function handleChange(e) {
    setValue(e.target.value);
 
  }

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div>
      <div className="position-relative">
        <input
          type={passwordType}
          className=" px-4 w-100 "
          placeholder=""
          value={value}
          onChange={handleChange}
        
        />
        <label className={value && "filled"}>{props.label}</label>
      {
        props.type==="password"?     <span onClick={togglePassword} className="eye">
        {passwordType === "password" ? (
          <AiOutlineEyeInvisible style={{cursor:"pointer"}} />
        ) : (
          <AiOutlineEye style={{cursor:"pointer"}} />
        )}
      </span>:""
      }
      </div>
    </div>
  );
}

export default CustomInput;
