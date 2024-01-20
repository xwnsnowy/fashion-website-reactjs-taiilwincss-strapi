import { useEffect, useState } from "react";
import Image from "../../assets/images";

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
    <div className="relative transition-transform duration-300 ease-in-out hover:scale-125">
      {/* light mode */}
      <img
        src={Image.moon}
        alt="Moon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`absolute right-0 z-10 w-6 cursor-pointer transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } `}
      />
      {/* dark mode */}
      <img
        src={Image.sun}
        alt="Sun"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`hove w-6 cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default DarkMode;
