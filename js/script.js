var button = document.querySelector(".button-search");
var popup = document.querySelector(".search-hotel-modal");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  arrival.focus();
})

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})