const vid = document.getElementById("headerVideo");
const vidTimeline = document.getElementById("videoTimeline");
const vidWidth = document.getElementById("videoWidth");

let updateTimeline = () => {
  let percent = (vid.currentTime / vid.duration) * 100;
  vidWidth.style.height = percent + "%";
};
vid.addEventListener("timeupdate", updateTimeline);

vidTimeline.addEventListener("click", (e) => {
  let percent = (e.offsetY / vidTimeline.offsetHeight) * vid.duration;
  vid.currentTime = percent;
});

window.addEventListener("load", () => {
  document.getElementById("loader").style.transform = "translate(0%, -100%)";
});
