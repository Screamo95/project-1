document.querySelector(`#question__item-text-1`).hidden = true;
document.querySelector(`#question__item-text-3`).hidden = true;
document.querySelector(`#question__item-text-4`).hidden = true;

document.querySelector(`#question__item-top-1`).onclick = function() {
  document.querySelector(`#question__item-text-1`).hidden = false;
  document.querySelector(`#question__item-text-2`).hidden = true;
  document.querySelector(`#question__item-text-3`).hidden = true;
  document.querySelector(`#question__item-text-4`).hidden = true;

  document.querySelector(`#question__item-img-1`).src = "img/question_arrow-active.svg";
  document.querySelector(`#question__item-img-2`).src = "img/question_arrow.svg";
  document.querySelector(`#question__item-img-3`).src = "img/question_arrow.svg";
  document.querySelector(`#question__item-img-4`).src = "img/question_arrow.svg";
}

document.querySelector(`#question__item-top-2`).onclick = function() {
  document.querySelector(`#question__item-text-1`).hidden = true;
  document.querySelector(`#question__item-text-2`).hidden = false;
  document.querySelector(`#question__item-text-3`).hidden = true;
  document.querySelector(`#question__item-text-4`).hidden = true;

  document.querySelector(`#question__item-img-1`).src = "img/question_arrow.svg";
  document.querySelector(`#question__item-img-2`).src = "img/question_arrow-active.svg";
  document.querySelector(`#question__item-img-3`).src = "img/question_arrow.svg";
  document.querySelector(`#question__item-img-4`).src = "img/question_arrow.svg";
}

document.querySelector(`#question__item-top-3`).onclick = function() {
  document.querySelector(`#question__item-text-1`).hidden = true;
  document.querySelector(`#question__item-text-3`).hidden = false;
  document.querySelector(`#question__item-text-2`).hidden = true;
  document.querySelector(`#question__item-text-4`).hidden = true;

  document.querySelector(`#question__item-img-1`).src = "img/question_arrow.svg";
  document.querySelector(`#question__item-img-3`).src = "img/question_arrow-active.svg";
  document.querySelector(`#question__item-img-2`).src = "img/question_arrow.svg";
  document.querySelector(`#question__item-img-4`).src = "img/question_arrow.svg";
}

document.querySelector(`#question__item-top-4`).onclick = function() {
  document.querySelector(`#question__item-text-1`).hidden = true;
  document.querySelector(`#question__item-text-4`).hidden = false;
  document.querySelector(`#question__item-text-2`).hidden = true;
  document.querySelector(`#question__item-text-3`).hidden = true;

  document.querySelector(`#question__item-img-1`).src = "img/question_arrow.svg";
  document.querySelector(`#question__item-img-4`).src = "img/question_arrow-active.svg";
  document.querySelector(`#question__item-img-2`).src = "img/question_arrow.svg";
  document.querySelector(`#question__item-img-3`).src = "img/question_arrow.svg";
}