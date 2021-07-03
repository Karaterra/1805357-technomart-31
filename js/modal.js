const feedbackLink = document.querySelector(".button-open-feedback");
const feedbackPopup = document.querySelector(".modal-window");
const feedbackClose = feedbackPopup.querySelector(".button-close");
const feedbackForm = feedbackPopup.querySelector(".form-feedback");
const feedbackName = feedbackPopup.querySelector(".yourname");
const feedbackMail = feedbackPopup.querySelector(".yourmail");
const feedbackMessage = feedbackPopup.querySelector(".yourmessage-txt");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("yourname");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("element-hidden");
  feedbackPopup.classList.add("modal-start");

  if (storage) {
    feedbackName.value = storage;
    feedbackMail.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("element-hidden");
  feedbackPopup.classList.remove("modal-error");
  feedbackPopup.classList.remove("modal-start");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackMail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.remove("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("yourname", feedbackName.value);

    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {

      evt.preventDefault();
      feedbackPopup.classList.toggle("element-hidden");

      loginPopup.classList.remove("modal-error");
      feedbackPopup.classList.remove("modal-start");
    }
  }
);
