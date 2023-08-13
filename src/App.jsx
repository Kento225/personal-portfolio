import "./App.css";
import reactLogo from "./assets/react-original-wordmark.svg";
import jsLogo from "./assets/javascript-plain.svg";
import htmlLogo from "./assets/html5-original-wordmark.svg";
import cssLogo from "./assets/css3-original-wordmark.svg";
import gitLogo from "./assets/git-plain-wordmark.svg";
import webpackLogo from "./assets/webpack-original.svg";
import githubLogo from "./assets/github-original.svg";
import externalIcon from "./assets/icons8-external-link.svg";
import shoppingImage from "./assets/Screenshot from 2023-08-13 02-01-20.png";
import todoImage from "./assets/Screenshot from 2023-08-13 02-11-01.png";
import ticTacToeImage from "./assets/Screenshot from 2023-08-13 02-16-21.png";
import weatherImage from "./assets/Screenshot from 2023-08-13 02-54-40.png";
import cvImage from "./assets/Screenshot from 2023-08-13 03-01-31.png";
import linkedInLogo from "./assets/linkedin-plain.svg";

import "./crt.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <nav className="navigation">
          <p></p>
        </nav>
        <section className="header">
          <h2>
            About me{" "}
            <span>
              <button>_</button>
              <button>X</button>
            </span>
          </h2>
          <div className="header-wrapper">
            <h1>Augustas Kiela</h1>
            <a href="https://github.com/Kento225">
              <img src={githubLogo}></img>
            </a>
            <a href="https://lt.linkedin.com/in/augustas-kiela-0aa91a26a">
              {" "}
              <img src={linkedInLogo}></img>
            </a>
            <h1>Front-end Developer</h1>
          </div>
        </section>
        <section className="technologies">
          <h2>
            Technologies I've learned so far{" "}
            <span>
              <button>_</button>
              <button>X</button>
            </span>
          </h2>
          <div className="tech-wrapper">
            <img src={reactLogo}></img>
            <img src={jsLogo}></img>
            <img src={htmlLogo}></img>
            <img src={cssLogo}></img>
            <img src={gitLogo}></img>
            <img src={webpackLogo}></img>
          </div>
        </section>

        <section className="projects">
          <h2>
            My Projects{" "}
            <span>
              <button>_</button>
              <button>X</button>
            </span>
          </h2>
          <div className="project-wrapper">
            <div className="project">
              <p>Simple Shopping Website</p>
              <img src={shoppingImage} className="project-image"></img>
              <div className="project-link-wrapper">
                <a href="https://odin-shopping-cart.netlify.app/">
                  <img src={externalIcon} className="preview-icon"></img>
                </a>
                <a href="https://github.com/Kento225/shopping-cart">
                  <img src={githubLogo} className="repo-icon"></img>
                </a>
              </div>
            </div>
            <div className="project">
              <p>To-do list website</p>
              <img src={todoImage} className="project-image"></img>
              <div className="project-link-wrapper">
                <a href="https://kento225.github.io/todo-list/">
                  <img src={externalIcon} className="preview-icon"></img>
                </a>
                <a href="https://github.com/Kento225/todo-list">
                  <img src={githubLogo} className="repo-icon"></img>
                </a>
              </div>
            </div>
            <div className="project">
              <p>Tic tac toe game</p>
              <img src={ticTacToeImage} className="project-image"></img>
              <div className="project-link-wrapper">
                <a href="https://kento225.github.io/tic-tac-toe/">
                  <img src={externalIcon} className="preview-icon"></img>
                </a>
                <a href="https://github.com/Kento225/tic-tac-toe">
                  <img src={githubLogo} className="repo-icon"></img>
                </a>
              </div>
            </div>
            <div className="project">
              <p>Weather app</p>
              <img src={weatherImage} className="project-image"></img>
              <div className="project-link-wrapper">
                <a href="https://kento225.github.io/weather-app/">
                  <img src={externalIcon} className="preview-icon"></img>
                </a>
                <a href="https://github.com/Kento225/weather-app/tree/main">
                  <img src={githubLogo} className="repo-icon"></img>
                </a>
              </div>
            </div>
            <div className="project">
              <p>CV builder app</p>
              <img src={cvImage} className="project-image"></img>
              <div className="project-link-wrapper">
                <a href="https://cv-builder-odin.netlify.app/">
                  <img src={externalIcon} className="preview-icon"></img>
                </a>
                <a href="https://github.com/Kento225/cv-builder">
                  <img src={githubLogo} className="repo-icon"></img>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
