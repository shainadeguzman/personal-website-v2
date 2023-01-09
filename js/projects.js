const projectsCard = document.querySelectorAll(".projects__card");
const projectsOverlay = document.querySelector(".projects__overlay");
const projectBackBtn = document.querySelectorAll(".projects__sidebar-btn");
const projectSidebar = document.querySelectorAll(".projects__sidebar");
const tabIndexProjElements = document.querySelectorAll(".tabIndxsProj");

// FUNCTIONS
const addProjIndexFocus = function () {
  tabIndexProjElements.forEach((tabEl) => (tabEl.tabIndex = ""));
};

const removeProjIndexFocus = function () {
  tabIndexProjElements.forEach((tabEl) => (tabEl.tabIndex = -1));
};

const bodyOverFlow = function (param) {
  document.body.style.overflowY = `${param}`;
};

projectsCard.forEach((card) =>
  card.addEventListener("click", function (e) {
    const targetEl = e.target.dataset.num;
    document
      .querySelector(`.projects__sidebar-${targetEl}`)
      .classList.add("active");
    projectsOverlay.classList.remove("hidden");
    bodyOverFlow("hidden");

    if (
      document
        .querySelector(`.projects__sidebar-${targetEl}`)
        .classList.contains("active")
    ) {
      removeProjIndexFocus();
    } else {
      addProjIndexFocus();
    }
  })
);

projectsCard.forEach((card) =>
  card.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const targetEl = e.target.dataset.num;
      document
        .querySelector(`.projects__sidebar-${targetEl}`)
        .classList.add("active");
      projectsOverlay.classList.remove("hidden");
      bodyOverFlow("hidden");

      if (
        document
          .querySelector(`.projects__sidebar-${targetEl}`)
          .classList.contains("active")
      ) {
        removeProjIndexFocus();
      } else {
        addProjIndexFocus();
      }
    }
  })
);

projectBackBtn.forEach((backBtn) =>
  backBtn.addEventListener("click", function (e) {
    const target = e.target.classList[0];
    if (target === "back-btn") {
      backBtn.parentElement.classList.remove("active");
      projectsOverlay.classList.add("hidden");
      bodyOverFlow("scroll");
      addProjIndexFocus();
    }
  })
);

projectsOverlay.addEventListener("click", function () {
  projectSidebar.forEach((sidebar) => {
    sidebar.classList.remove("active");
  });
  projectsOverlay.classList.add("hidden");
  bodyOverFlow("scroll");
  addProjIndexFocus();
});
