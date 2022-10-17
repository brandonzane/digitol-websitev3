import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container text-white">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <p className="mt-4 mb-4 title-font-2">
              Copyright ©{new Date().getFullYear()} Digitol Marketing Agency
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
