const btn = document.getElementById("order-btn");
const btnClose = document.getElementById("order-close");
const section = document.getElementById("modal");

btn.addEventListener("click", () => {
  section.classList.toggle("modal");
});
btnClose.addEventListener("click", () => {
  section.classList.add("modal");
});
