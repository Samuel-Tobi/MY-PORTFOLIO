import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profileContainer">
      <h2>Hi, I'm Oluwatobi Olukayode</h2>
      <p>
        I'm a Front End Engineer based in Lagos. I code, write and build stuff
        on internet. I'm a Front End Engineer interested in design, under
        engineering and open source. I'm focused on building products with
        JavaScript, specifically React. When I'm not coding, I'm likely on
        twitter bantering or tweeting about football.
      </p>
      <hr />
      <p>My skills include: HTML, CSS, JavaScript, React JS, Git and SQL </p>
      <a href="mailto:oluwatobi9990@gmail.com" target={"_blank}"}>
        <button>CONTACT ME</button>
      </a>
    </div>
  );
}
