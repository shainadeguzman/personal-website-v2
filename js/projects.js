const projectsCard = document.querySelectorAll(".featured-projects__card");
const projectsOverlay = document.querySelector(".featured-projects__overlay");
const projectBackBtn = document.querySelectorAll(
  ".featured-projects__sidebar-btn"
);
const projectSidebar = document.querySelectorAll(".featured-projects__sidebar");

const bodyOverFlow = function (param) {
  document.body.style.overflowY = `${param}`;
};

projectsCard.forEach((card) =>
  card.addEventListener("click", function (e) {
    const targetEl = e.target.dataset.num;
    console.log(targetEl);
    document
      .querySelector(`.featured-projects__sidebar-${targetEl}`)
      .classList.add("active");
    projectsOverlay.classList.remove("hidden");
    bodyOverFlow("hidden");
  })
);

projectBackBtn.forEach((backBtn) =>
  backBtn.addEventListener("click", function (e) {
    const target = e.target.classList[0];
    if (target === "back-btn") {
      console.log(backBtn.parentElement);
      backBtn.parentElement.classList.remove("active");
      projectsOverlay.classList.add("hidden");
      bodyOverFlow("scroll");
    }
  })
);

projectsOverlay.addEventListener("click", function () {
  projectSidebar.forEach((sidebar) => {
    sidebar.classList.remove("active");
  });
  projectsOverlay.classList.add("hidden");
  bodyOverFlow("scroll");
});
