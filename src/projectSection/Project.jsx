import React from "react";
import admin from "../assets/ADMIN.png";
import calculator from "../assets/Calculator.png";
import newYearCountdown from "../assets/CALENDAR.png";
import musicLyrics from "../assets/lyrics.png";
import reactWeather from "../assets/ReactWeather.png";
import todo from "../assets/TODO.png";
import weatherApp from "../assets/weather.png";
import "./project.css";

export default function Project() {
  return (
    <>
      <h2 className="projectsTitle">Selected Projects</h2>
      <div className="projectsContainer">
        <div>
          <img className="projectsImg" src={musicLyrics} alt="" />
          <h3 id="projectsTitleInner">Music Lyrics App</h3>
          <p>
            {" "}
            Music Lyrics app was created to help users search for lyrics for
            their favorite music.
          </p>
          <a
            link
            href="https://strong-mermaid-b5843d.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>VIEW APPLICATION</button>
          </a>
        </div>
        <div>
          <img className="projectsImg" src={weatherApp} alt="" />
          <h3 id="projectsTitleInner">Weather App</h3>
          <p>
            This application was created to help users check the weather
            condition of a particular place at any point in time.
          </p>
          <a
            link
            href="https://chic-panda-9db74e.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>VIEW APPLICATION</button>
          </a>
        </div>
        <div>
          <img className="projectsImg" src={calculator} alt="" />
          <h3 id="projectsTitleInner">Basic Calculator App</h3>
          <p>
            This is a simple basic calculator similar to a small handheld
            calculator. Use this basic calculator for math with addition,
            subtraction, division and multiplication.
          </p>
          <a
            link
            href="https://lucky-pothos-f3df12.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>VIEW APPLICATION</button>
          </a>
        </div>
        <div>
          <img className="projectsImg" src={todo} alt="" />
          <h3 id="projectsTitleInner">Todo App</h3>
          <p>
            Become focused, organized, and calm with this todo list application.
            Add your tasks.Organize your life everyday.
          </p>
          <a
            link
            href="https://roaring-mooncake-93c61b.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>VIEW APPLICATION</button>
          </a>
        </div>
        <div>
          <img className="projectsImg" src={newYearCountdown} alt="" />
          <h3 id="projectsTitleInner">New Year Countdown App</h3>
          <p>
            This application help user countdown to the New Year. Showing days,
            hours, minutes and seconds ticking down to 0.
          </p>
          <a
            link
            href="https://guileless-begonia-f7a7b9.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>VIEW APPLICATION</button>
          </a>
        </div>
        <div>
          <img className="projectsImg" src={admin} alt="" />
          <h3 id="projectsTitleInner">Admin Dashboard</h3>
          <p>
            This is an admin dashboard. It was buit with React Js, passed data
            between components and used dynamic styling.
          </p>
          <a
            link
            href="https://adminapp-44.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>VIEW APPLICATION</button>
          </a>
        </div>
        <div className="center-Img">
          <img className="projectsImg" src={reactWeather} alt="" />
          <h3 id="projectsTitleInner">Weather Application (React Js)</h3>
          <p>
            This is a weather application built with react JS to help users
            check the weather condition of a particular place at any point in
            time.
          </p>
          <a
            link
            href="https://gregarious-pasca-89ea71.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <button>VIEW APPLICATION</button>
          </a>
        </div>
      </div>
    </>
  );
}
