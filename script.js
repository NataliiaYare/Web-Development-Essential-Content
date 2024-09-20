document.addEventListener("DOMContentLoaded", function () {
  let mobileClik = document.getElementById("mobile_click");
  let navList = document.querySelector(".nav-list");

  mobileClik.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
