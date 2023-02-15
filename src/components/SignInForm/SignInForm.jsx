import React, { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import "./SignInForm.css";

function SignInForm() {

  return (
    <>
      <div className="form-card px-sm-5 pt-4  pt-sm-5 pb-3 d-flex justify-content-between flex-column ">
        <div className="px-4">
          <div className="text-center mt-3">
            <h3 className="fw-semibold">Hello, Again!</h3>
            <p className="mt-3" style={{ color: "#666666" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mt-4">
            <div className=" mb-4">
              <CustomInput label="Cusomer ID" type="text" />
            </div>
            <div className=" mb-4">
              <CustomInput label="Email" type="email" />
            </div>
            <div className=" mb-4">
              <CustomInput label="Password" type="password" />
            </div>
            <div className="text-end">
              <span
                style={{
                  color: "#666666",
                  fontSize: " 12px ",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </span>
            </div>
          </div>
        </div>
        <div className="text-center px-3">
          <button className="w-100">Sign In</button>
          <p
            style={{
              color: "#666666",
              fontSize: " 12px ",
            }}
            className="mt-4"
          >
            Don’t have an account?
            <span style={{ color: "#25A0DA", cursor: "pointer" }}>
              Register
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
