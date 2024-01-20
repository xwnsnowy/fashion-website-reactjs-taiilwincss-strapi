import { useEffect, useState } from "react";
import Moon from "../../assets/images/icon-moon-2.png";
import Sun from "../../assets/images/icon-sun-2.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  console.log(theme);

  const element = document.documentElement;

  useEffect(() => {
    const handleThemeChange = () => {
      if (theme === "dark") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };

    handleThemeChange();
  }, [theme, element]);

  return (
    <div className="relative">
      {/* light mode */}
      <img
        src={Moon}
        alt="Moon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`absolute right-0 z-10 w-7 cursor-pointer transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } `}
      />
      {/* dark mode */}
      <img
        src={Sun}
        alt="Sun"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-7 cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default DarkMode;
