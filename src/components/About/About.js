import React from "react";
import "./about.css";
import NewsHub from "../Images/NewsHub_Project.png";
import PlayvdText from "../Images/PlayvdText_Project.png";
import MyNotebook from "../Images/MyNoteBook_Project.png";

export default function about() {
  return (
    <div>
      <div className="container">
        <div className="about text-center my-4">
          <h2 className="colorgreen">About</h2>
        </div>
        <div className="about-desc my-4">
          A B.tech graduate guy from NIET specified in computer Science &
          Engineering in 2021 .Currently Working as a Fontend Web-Developer in
          Cognizant.Always be happy to work...
        </div>
      </div>
      <h1 className="colorgreen text-center">Skills</h1>
      <div className="skillContainer">
        <div className="skills">
          <li>
            <h3>HTML5</h3>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <h3>CSS3</h3>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li>
            <h3>JavaScript</h3>
            <span className="bar">
              <span className="js"></span>
            </span>
          </li>
          <li>
            <h3>React</h3>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
          <li>
            <h3>Redux</h3>
            <span className="bar">
              <span className="redux"></span>
            </span>
          </li>
        </div>
        <div className="container">
        <div className="text-center">
          <h1 className="colorgreen margincert">Projects</h1>
        </div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <a href="https://github.com/Buddyabc/newshub">
                <img src={NewsHub} class="d-block w-100" alt="..." />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h5 className="colorgreen1">NewsHub -Project</h5>
                <p className="colorgreen1">
                  <a href="https://github.com/Buddyabc/newshub">
                    NewsHub Github Link
                  </a>{" "}
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <a href="https://playvdtext.netlify.app/">
                <img src={PlayvdText} class="d-block w-100" alt="..." />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h5 className="colorgreen1">PlayvdText-Project</h5>
                <p className="colorgreen1">
                  <a href="https://playvdtext.netlify.app/">PlayvdText-Link</a>{" "}
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <a href="https://replit.com/@vikranttyagi5/MyNotebook">
                MyNoteBook
                <img src={MyNotebook} class="d-block w-100" alt="..." />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h5 className="colorgreen1">MyNoteBook-Project</h5>
                <p className="colorgreen1">
                  <a href="https://replit.com/@vikranttyagi5/MyNotebook">
                    MyNoteBook-Link
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
