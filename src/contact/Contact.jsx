import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contactContainer">
        <h2>Contact </h2>
        <p>
          I am always available for a chat. Kindly contact me on any of these
          platforms and get a swift response.
        </p>
        <ul className="contactList">
          <li>
            <a href="mailto:oluwatobi9990@gmail.com" target={"_blank}"}>
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tobiolukayode/"
              target={"_blank}"}
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="#" target={"_blank}"}>
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/Samuel-Tobi" target={"_blank}"}>
              Github
            </a>
          </li>
        </ul>
      </div>

      <div className="contactFooter">
        <footer>
          <p>&copy; 2022. All rights reserved to Oluwatobi Olukayode</p>
        </footer>
      </div>
    </>
  );
}
