//! Opening modal window when clicking on the open button
let btnShow = document.querySelectorAll(".modal-show");
btnShow.forEach(function(element) {
  element.onclick = modalShow;
});

function modalShow() {
  let modalId = this.dataset.modal;
  document.querySelector(`.modal-wrap[data-modal="${modalId}"]`).classList.remove("hide");
}

//! Closing modal window when clicking on the close button
let btnClose = document.querySelectorAll(".modal-close");
btnClose.forEach(function(element){
  element.onclick = modalClose;
});

function modalClose() {
  let modalId = this.dataset.modal;
  document.querySelector(`.modal-wrap[data-modal="${modalId}"]`).classList.add("hide");
}

//! Closing modal window when pressing escape button
let wrap = document.querySelectorAll(".modal-wrap");
document.onkeydown = function(evt) {
  wrap.forEach(function(element) {
    if (evt.code == "Escape" && !element.classList.contains("hide")) {
      element.classList.add("hide");
    }
  });
};

//! Closing modal window when clicking on the grey background
wrap.forEach(function(item) {
  let modalId = item.dataset.modal;
  item.onclick = function() {
    document.querySelector(`.modal-wrap[data-modal="${modalId}"]`).classList.add("hide");
  }
});

//! Prevent closing modal window when clicking on the modal window itself
let modal = document.querySelectorAll(".modal");
modal.forEach(function(item) {
  item.onclick = function (evt) {
    evt.stopPropagation();
}}
);
