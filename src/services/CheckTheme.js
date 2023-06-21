export const CheckTheme = (element) => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
};
