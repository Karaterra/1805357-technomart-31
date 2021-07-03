const mapLink = document.querySelector(".contacts-button-map");
const mapPopup = document.querySelector(".popup-window");
const mapClose = mapPopup.querySelector(".button-close-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("element-hidden");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("element-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {

      evt.preventDefault();
      mapPopup.classList.toggle("element-hidden");

  }
});
