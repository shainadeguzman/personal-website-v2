let edge = 0;
const scrolled = 400;

let navBar = document.querySelector(".nav");

const scrollToTopBtn = document.querySelector(".scroll-top-btn");

const mobileNavBtn = document.querySelector(".nav__btn");
const mobileNav = document.querySelector(".nav__mobile");
const mobileNavItems = document.querySelectorAll(".nav__mobile-items");
const mobileNavOverlay = document.querySelector(".nav__mobile-overlay");

// MOBILE NAVIGATION
mobileNavBtn.addEventListener("click", function () {
  mobileNavBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  mobileNavOverlay.classList.toggle("hidden");
  document.getElementById("body").classList.toggle("overflow-hidden");
});

mobileNavItems.forEach((item) => {
  mobileNavBtn.classList.remove("active");
  mobileNav.classList.remove("active");
  mobileNavOverlay.classList.add("hidden");
  document.getElementById("body").classList.remove("overflow-hidden");
});

mobileNavOverlay.addEventListener("click", function () {
  mobileNavBtn.classList.remove("active");
  mobileNav.classList.remove("active");
  mobileNavOverlay.classList.add("hidden");
  document.getElementById("body").classList.remove("overflow-hidden");
});

window.addEventListener("resize", function () {
  const vw = Math.max(document.documentElement.clientWidth);
  if (vw >= 768) {
    mobileNavBtn.classList.remove("active");
    mobileNav.classList.remove("active");
    mobileNavOverlay.classList.add("hidden");
    document.getElementById("body").classList.remove("overflow-hidden");
  }
});

window.addEventListener("scroll", function () {
  // SHOW/HIDE NAV WHEN SCROLL
  const scrollTop = window.scrollX || document.documentElement.scrollTop;
  if (scrollTop > edge) {
    navBar.style.top = "-9rem";
  } else {
    navBar.style.top = "0";
    navBar.style.background = "rgba(1, 14, 42, 1)";
  }

  if (scrollTop <= 80) {
    navBar.style.background = "transparent";
  }
  edge = scrollTop;

  // REVEAL SCROLL TO TOP BUTTON
  if (scrollTop > scrolled - 100) {
    scrollToTopBtn.classList.add("reveal");
  }

  if (scrolled >= scrollTop) {
    scrollToTopBtn.classList.remove("reveal");
  }
});

// SCROLL TO TOP BUTTON
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
