import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" style={{ marginTop: "43vh" }}>
      <h4 className="text-center">All Rights Reserved &copy; Style Up</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privicy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
