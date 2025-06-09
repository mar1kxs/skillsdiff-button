const btn = document.getElementById("toggle-btn");
const dropdown = document.getElementById("dropdown");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  btn.classList.toggle("closed");
  dropdown.classList.toggle("visible");
});
