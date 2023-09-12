import ToggleThemeBtn from "../../toggle-theme-btn/toggle-theme-btn";

export const Header = () => {
  return (
    <header className="left-0 right-0 shadow-sm flex justify-end pr-5 fixed top-0 py-5 dark:bg-black bg-white z-10">
      <ToggleThemeBtn />
    </header>
  );
};
