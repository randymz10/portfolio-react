import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const html = document.querySelector('html');
  
  function handleChangeTheme() {
    html.dataset.theme = theme;
    if (theme === "light") return setTheme("dark");
    if (theme === "dark") return setTheme("light");
  }

  return (
    <div className="theme-light" data-theme={theme}>
      <div>Randy Portfolio</div>
      <button
        className="button is-warning"
        type="button"
        onClick={handleChangeTheme}
      >
        Test button
      </button>
    </div>
  );
}

export default App;
