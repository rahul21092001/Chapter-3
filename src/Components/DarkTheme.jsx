import React from "react";
import { useState, useEffect } from "react";

const DarkTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h1>Toggle Theme</h1>
      <button onClick={toggleTheme}>Click here</button>
      <hr />
    </div>
  );
};

export default DarkTheme;
