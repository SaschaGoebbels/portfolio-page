//Animation of Object Scrolling
const obs_opt = { root: null, rootMargin: "0px", threshold: 0.8 };
const observer = new IntersectionObserver((entries, obs_opt) => {
  entries.forEach((entry) => {
    // entry.target.classList.toggle('navbar__list_item_active', entry.isIntersecting)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    //repeat
    else {
      entry.target.classList.remove("show");
    }
  });
});
////////////////////////////////////////////////////////////////////////////
// Language switch
$('[lang="en"]').hide();
$("#switch-lang").click(function () {
  $('[lang="de"]').toggle();
  $('[lang="en"]').toggle();
});
////////////////////////////////////////////////////////////////////////////
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
////////////////////////////////////////////////////////////////////////////
//navbar__list_item_active
const nav_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting == true) {
        // console.log(entry.target.id)
        navbar__list_item_active(entry.target.id);
      }
    });
  },
  {
    // threshold: .5,
    rootMargin: "-400px",
  }
);
nav_sectionElements = document.querySelectorAll(".nav_section");
nav_sectionElements.forEach((el) => nav_observer.observe(el));

function navbar__list_item_active(id) {
  document
    .querySelector("#nav_home")
    .classList.toggle("nav_a_active", id == "particles-js");
  document
    .querySelector("#nav_about")
    .classList.toggle("nav_a_active", id == "about");
  document
    .querySelector("#nav_portfolio")
    .classList.toggle("nav_a_active", id == "portfolio");
  document
    .querySelector("#nav_projects")
    .classList.toggle("nav_a_active", id == "slidebar");
  document
    .querySelector("#nav_contact")
    .classList.toggle("nav_a_active", id == "footer");
}

const main_nav_list = document.querySelector(".main_nav_list");
main_nav_list.addEventListener("click", function () {
  var elm = document.getElementById("navbar__toogle_input");
  nav_btn_hamburger.classList.remove("disp_none");
  nav_close_btn.classList.add("disp_none");
  elm.checked = false;
  console.log("OK");
});
// Copyright
const yearCopy = document.querySelector(".yearCopy");
const actualYear = new Date().getFullYear();
yearCopy.textContent = actualYear;

//Nav Close Ico
const nav_btn_hamburger = document.querySelector(".navbar__menu_img");
const nav_close_btn = document.querySelector(".close_ico");

nav_btn_hamburger.addEventListener("click", function () {
  nav_btn_hamburger.classList.toggle("disp_none");
  nav_close_btn.classList.toggle("disp_none");
});
nav_close_btn.addEventListener("click", function () {
  nav_btn_hamburger.classList.toggle("disp_none");
  nav_close_btn.classList.toggle("disp_none");
});

// quitt menu when click
// const click_menu = document.querySelectorAll('.nav_a');
// const menu_ckb = document.getElementById('navbar__toogle_input');
// document.getElementById('navbar__toogle_input').
