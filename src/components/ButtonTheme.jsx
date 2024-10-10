import { FaSun, FaMoon } from "react-icons/fa6";

function ButtonTheme({ theme, onChangeTheme }) {
  return (
    <button
      className={` ${theme === "dark" ? "button is-dark" : "button is-light"}`}
      onClick={onChangeTheme}
      type="button"
    >
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ButtonTheme;
