let btnDark = document.querySelector("button.buttonDark");
let btnLight = document.querySelector("button.buttonLight");

window.onresize = function () {
  if (window.innerWidth <= 600) {
    btnDark.classList.add("btn-sm");
    btnLight.classList.add("btn-sm");
  } else {
    btnDark.classList.remove("btn-sm");
    btnLight.classList.remove("btn-sm");
  }
};
