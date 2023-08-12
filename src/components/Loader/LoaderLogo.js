import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="logo-container">
        <div className="zoom-effect">
          <img
            src="https://i.pinimg.com/736x/6e/52/d3/6e52d389dbe23586b9a65547ffbc6746.jpg"
            alt="logo"
          />
        </div>
      </div>
    );
  }
}

export default LogoLoader;
