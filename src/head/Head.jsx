import React from "react";
import passport from "../assets/passport.jpg";
import "./head.css";

export default function Head() {
  return (
    <div className="headContainer">
      <nav>
        <img src={passport} alt="" className="image" />
        <h1 className="headTitle">Oluwatobi Olukayode</h1>
      </nav>
    </div>
  );
}
