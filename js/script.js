let sectionSkills = document.querySelector("#skills");
let theProgressSkills = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (scrollY >= sectionSkills.offsetTop - 600) {
    theProgressSkills.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    theProgressSkills.forEach((span) => {
      span.style.width = "0px";
    });
  }
};
