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

luxy.init();

const cursor = document.getElementById("cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

let allCursorPoints = document.getElementsByClassName("cursor__bg");

for (let i = 0; i < allCursorPoints.length; i++) {
  allCursorPoints[i].addEventListener("mouseover", () => {
    cursor.style.padding = "80px";
  });
}
for (let i = 0; i < allCursorPoints.length; i++) {
  allCursorPoints[i].addEventListener("mouseout", () => {
    cursor.style.padding = "0px";
  });
}

const profile = document.getElementById("profile");
const cursorText = document.getElementById("cursorText");

profile.addEventListener("mousemove", () => {
  cursorText.innerHTML = "PLAY";
});

profile.addEventListener("mouseout", () => {
  cursorText.innerHTML = "";
});
