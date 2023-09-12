import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function ToggleThemeBtn() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setDarkMode] = useState(theme === "light" ? false : true);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      setTheme("light");
    }
  }, [isDarkMode, setTheme]);

  return (
    <>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={15}
      />
    </>
  );
}

export default ToggleThemeBtn;
