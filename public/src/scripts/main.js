const btn = document.getElementById("toggle-btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  btn.classList.toggle("closed");
});
