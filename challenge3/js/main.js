let nav = document.querySelector("nav");
let page = document.querySelector("main");
let links = document.querySelector(".links");
nav.addEventListener("click", function () {
  this.classList.toggle("active");
  page.classList.toggle("active");
  links.classList.toggle("active");
});
