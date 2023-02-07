let  Box = document.querySelector(".box");
let Close = document.querySelector(`.close`);
Box.onclick = function () {
  Box.classList.add("active");
};
Close.onclick = function () {
  Close.classList.remove("active");
};