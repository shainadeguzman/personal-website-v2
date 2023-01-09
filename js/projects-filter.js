const projectsFilterNav = document.querySelector(".projects__nav");

projectsFilterNav.addEventListener("click", function (e) {
  const target = e.target.classList[0];
  const targetBtn = e.target.classList[1];
  if (target !== "filter-btn") {
    return;
  } else {
    projectsFilterNav
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    projectsFilterNav.querySelector(`.${targetBtn}`).classList.add("active");
    document.querySelectorAll(".projects__card").forEach((card) => {
      if (targetBtn === card.classList[1]) {
        card.classList.add("active");
      } else if (targetBtn === "all-projects") {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }
});
