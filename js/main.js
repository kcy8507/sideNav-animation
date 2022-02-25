let sideNav = document.querySelector(".side-nav");
let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let swtBtn = document.querySelector(".swt");
let flag = false;

openBtn.addEventListener("click", function () {
  sideNav.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  sideNav.classList.remove("active");
});

// swtBtn.addEventListener("click", function () {
//   sideNav.classList.toggle("active");
// });

swtBtn.addEventListener("click", function () {
  sideNav.classList.add("active");
  if (sideNav.classList.contains("active") && flag == true) {
    sideNav.classList.remove("active");
    console.log(sideNav.classList);
  }
  flag = !flag;
});
