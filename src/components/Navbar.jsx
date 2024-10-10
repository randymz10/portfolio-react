import { useEffect, useState } from "react";
import { FaTerminal } from "react-icons/fa6";
import ButtonTheme from "./ButtonTheme";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState("light");

  const html = document.querySelector("html");

  function handleChangeTheme() {
    html.dataset.theme = theme;
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    if (theme === "dark") {
      setTheme("light");
      return;
    }
  }

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isActive]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function expandMenu() {
    setIsActive(!isActive);
  }

  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand is-size-4">
          <a className="navbar-item" href="#">
            <FaTerminal />
            <span className="navbar-item">Randy Muñoz </span>
          </a>
          <a
            role="button"
            className={isActive ? "navbar-burger is-active" : "navbar-burger"}
            aria-label="menu"
            aria-expanded={isActive ? "true" : "false"}
            data-target="navMenu"
            onClick={expandMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navMenu"
          className={isActive ? "navbar-menu is-active" : "navbar-menu"}
          data-aos={isActive && "fade-down"}
        >
          <div className="navbar-end">
            <a className="navbar-item" href="#home">
              Home
            </a>
            <a className="navbar-item">About me</a>
            <a className="navbar-item">Services</a>
            <a className="navbar-item">Proyects</a>
            <a className="navbar-item">Experience</a>
            <a className="navbar-item">Contact</a>
            <div className="navbar-item">
              <a className="button is-success">Download resume</a>
            </div>
            <div className="navbar-item">
              <ButtonTheme theme={theme} onChangeTheme={handleChangeTheme} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
