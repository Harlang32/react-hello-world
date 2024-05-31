import React from "react";
import { useState } from "react";

const [useDarkMode, setUseDarkMode] = useState(false);

<div className={useDarkMode ? "dark-mode dark" : "dark-mode light"}>
  <h1>Dark Mode</h1>
  <label>
    <input type="checkbox"
    onChange={() => {
        let nextValue = !useDarkMode;
        setUseDarkMode(nextValue);
    }} />
    <span>Use dark mode?</span>
  </label>
</div>;

export default DarkMode;