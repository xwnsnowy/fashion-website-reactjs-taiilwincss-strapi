import { useEffect, useState } from "react";
import images from "../../assets/images";

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
      <img
        src={theme === "light" ? images.sun : images.moon}
        alt={theme === "light" ? "Moon" : "Sun"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="right-0 z-10 w-6 cursor-pointer transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
