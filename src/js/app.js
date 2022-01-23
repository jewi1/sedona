import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

let feedbackBtn = document.querySelector(".feedback__btn");

let feedbackAdultMinus = document.querySelector(".feedback__left .feedback__minus");
let feedbackAdultPlus = document.querySelector(".feedback__left .feedback__plus");

let feedbackChildMinus = document.querySelector(".feedback__right .feedback__minus");
let feedbackChildPlus = document.querySelector(".feedback__right .feedback__plus");

function openFeedback(e) {
  e.preventDefault()
  let popup = document.querySelector(".feedback__popup");

  if (popup.classList.value === "feedback__popup") {
    popup.classList.add("feedback__popup--active")
  } else if (popup.classList.value === "feedback__popup feedback__popup--active") {
    popup.classList.remove("feedback__popup--active")
  }
}

feedbackAdultMinus.onclick = function() {
  if (adult.value <= 0) {
    feedbackAdultMinus.setAttribute("disabled", "disabled")
  } else if(adult.value > 0) {
    feedbackAdultMinus.removeAttribute("disabled")
    adult.value--
  }
}

feedbackAdultPlus.onclick = function() {
  feedbackAdultMinus.removeAttribute("disabled")
  adult.value++
}

feedbackChildMinus.onclick = function() {
  if (child.value <= 0) {
    feedbackChildMinus.setAttribute("disabled", "disabled")
  } else if(child.value > 0) {
    feedbackChildMinus.removeAttribute("disabled")
    child.value--
  }
}


feedbackChildPlus.onclick = function() {
  feedbackChildMinus.removeAttribute("disabled")
  child.value++
}

feedbackBtn.addEventListener("click", openFeedback)