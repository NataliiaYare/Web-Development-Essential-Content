// document.addEventListener("DOMContentLoaded", function () {
//   let mobileClik = document.getElementById("mobile_click");
//   let navList = document.querySelector(".nav-list");

//   mobileClik.addEventListener("click", function () {
//     navList.classList.toggle("active");
//   });
// });

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
