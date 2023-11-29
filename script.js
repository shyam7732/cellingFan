const btn = document.querySelector("#light-switch");
let fan = document.querySelector(".fan");
btn.addEventListener("click", function () {
  if (this.checked) {
    fan.classList.add("rotate");
  } else {
    fan.classList.remove("rotate");
  }
});
