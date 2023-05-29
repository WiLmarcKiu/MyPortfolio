// EFEK NAVBAR HEADER ON SCROLL
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// MENU BAR & SEARCH
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// document.querySelector('#search-icon').onclick = () =>{
//     document.querySelector('#search').classList.toggle('active');
// }

// document.querySelector('#close').onclick = () =>{
//     document.querySelector('#search').classList.remove('active');
// }

// PRELOADER
setTimeout(function () {
  $(".loader").fadeToggle();
}, 1500);

// EFEK KETIK
// const txtElement = ['Back End Developer'];
// let count = 0;
// let txtIndex = 0;
// let currentTxt = '';
// let words = '';

// (function ketik() {

//     if (count == txtElement.length) {
//         count = 0;
//     }

//     currentTxt = txtElement[count];

//     words = currentTxt.slice(0, ++txtIndex);
//     document.querySelector('.efek-ketik').textContent = words;

//     if (words.length == currentTxt.length) {
//         count++;
//         txtIndex = 0;
//     }

//     setTimeout(ketik, 300);

// })();

var typingEffect = new Typed(".efek-ketik", {
  strings: ["Wilmarc", "Maynard", "Kiu"],
  loop: true,
  typeSpeed: 110,
  backSpeed: 80,
  backDelay: 1000,
});

// SCROLL TOP BUTTON
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 100);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// NAVBAR ACTIVE ON SCROLL
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 95;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("header .navbar a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("header .navbar a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

// DARK THEME & LIGHT THEME MODE
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
