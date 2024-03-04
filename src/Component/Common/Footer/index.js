import React from "react";

const Footer = () => {
  return (
    <h6 style={{ textAlign: "center" }}>
      <div
        className="display-flex"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>@2023-2025 copyright to Profounded |</span>
        <div className="icons" style={{ marginLeft: "10px" }}>
          <div>
            <i className="bi bi-facebook"></i>
          </div>
          <div>
            <i className="bi bi-linkedin"></i>
          </div>
          <div>
            <i className="bi bi-instagram"></i>
          </div>
          <div>
            <i className="bi bi-twitter-x"></i>
          </div>
        </div>
      </div>
    </h6>
  );
};
export default Footer;