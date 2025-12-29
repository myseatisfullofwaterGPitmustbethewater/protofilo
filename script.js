const btn = document.getElementById("thmbtn");
const icon = document.getElementById("thmicn");
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  icon.classList.replace("bxs-sun", "bx-moon");
}
btn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  if (isLight) {
    icon.classList.replace("bxs-sun", "bx-moon");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.replace("bx-moon", "bxs-sun");
    localStorage.setItem("theme", "dark");
  }
});