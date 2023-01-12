let edge = 0;
const scrolled = 400;

let navBar = document.querySelector(".nav");

const scrollToTopBtn = document.querySelector(".scroll-top-btn");

const mobileNavBtn = document.querySelector(".nav__btn");
const mobileNav = document.querySelector(".nav__mobile");
const mobileNavItems = document.querySelectorAll(".nav__mobile-items");
const mobileNavOverlay = document.querySelector(".nav__mobile-overlay");
const tabIndexElements = document.querySelectorAll(".tabIndxs");
const toggleThemeBtn = document.getElementById("toggle-theme");
const toggleThememMobileBtn = document.getElementById("toggle-theme-mobile");
const formInputs = document.querySelectorAll(".input");

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
  document.getElementById("body").classList = "dark";
} else {
  if (localStorage.getItem("theme") === "dark") {
    document.getElementById("body").classList = "dark";
  } else {
    document.getElementById("body").classList = "light";
    toggleThemeBtn.classList.add("active");
    toggleThememMobileBtn.classList.add("active");
  }
}

// FUNCTIONS
const addIndexFocus = function () {
  tabIndexElements.forEach((tabEl) => (tabEl.tabIndex = ""));
};

const removeIndexFocus = function () {
  tabIndexElements.forEach((tabEl) => (tabEl.tabIndex = -1));
};

const toggleTheme = function () {
  if (document.getElementById("body").classList.contains("light")) {
    document.getElementById("body").classList = "dark";
    localStorage.setItem("theme", "dark");
    toggleThemeBtn.classList.remove("active");
    toggleThememMobileBtn.classList.remove("active");
    navBar.style.background = "rgba(1, 14, 42, 1)";
    formInputs.forEach(
      (input) => (input.style.backgroundColor = "rgba(1, 14, 42, 1)")
    );
  } else if (document.getElementById("body").classList.contains("dark")) {
    document.getElementById("body").classList = "light";
    localStorage.setItem("theme", "light");
    toggleThemeBtn.classList.add("active");
    toggleThememMobileBtn.classList.add("active");
    navBar.style.background = "rgba(255, 255, 255, 1)";
    formInputs.forEach(
      (input) => (input.style.backgroundColor = "rgba(255, 255, 255, 1)")
    );
  }
};

toggleThemeBtn.addEventListener("click", toggleTheme);
toggleThememMobileBtn.addEventListener("click", toggleTheme);

// MOBILE NAVIGATION
mobileNavBtn.addEventListener("click", function () {
  mobileNavBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  mobileNavOverlay.classList.toggle("hidden");

  if (mobileNavBtn.classList.contains("active")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  if (mobileNavBtn.classList.contains("active")) {
    removeIndexFocus();
  } else {
    addIndexFocus();
  }
});

mobileNavItems.forEach((item) => {
  mobileNavBtn.classList.remove("active");
  mobileNav.classList.remove("active");
  mobileNavOverlay.classList.add("hidden");
  document.body.style.overflowY = "scroll";
  addIndexFocus();
});

mobileNavOverlay.addEventListener("click", function () {
  mobileNavBtn.classList.remove("active");
  mobileNav.classList.remove("active");
  mobileNavOverlay.classList.add("hidden");
  document.body.style.overflowY = "scroll";
  addIndexFocus();
});

window.addEventListener("resize", function () {
  const vw = Math.max(document.documentElement.clientWidth);
  if (vw >= 992) {
    mobileNavBtn.classList.remove("active");
    mobileNav.classList.remove("active");
    mobileNavOverlay.classList.add("hidden");
    document.body.style.overflowY = "scroll";
    addIndexFocus();
  }
});

window.addEventListener("scroll", function () {
  // SHOW/HIDE NAV WHEN SCROLL
  const scrollTop = window.scrollX || document.documentElement.scrollTop;
  if (scrollTop > edge) {
    navBar.style.top = "-9rem";
  } else {
    navBar.style.top = "0";
    if (this.document.body.classList.contains("dark")) {
      navBar.style.background = "rgba(1, 14, 42, 1)";
    } else {
      navBar.style.background = "rgba(255, 255, 255, 1)";
    }
  }

  // IF NAVBAR IS NEAR TO ITSELF
  if (scrollTop <= 80) {
    navBar.style.background = "transparent";
  }
  edge = scrollTop;

  // REVEAL SCROLL TO TOP BUTTON
  if (scrollTop > scrolled - 100) {
    scrollToTopBtn.classList.add("reveal");
    scrollToTopBtn.tabIndex = "";
  }

  if (scrolled >= scrollTop) {
    scrollToTopBtn.classList.remove("reveal");
    scrollToTopBtn.tabIndex = -1;
  }
});

// SCROLL TO TOP BUTTON
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
