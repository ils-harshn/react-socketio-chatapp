const ThemeManager = {
  set: (theme) => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
  },
  get: () =>
    localStorage.getItem("theme") ||
    document.body.getAttribute("theme") ||
    "light",
  reset: () => {
    localStorage.clear();
    document.body.removeAttribute("theme");
  },
};

export default ThemeManager;
