// Create Countdown Timer
let countDownDate = new Date("jun 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.trunc(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
//Increasing width

let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
window.onscroll = function () {
  // for increasing width
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // for increasing number
  if (window.scrollY >= statsSection.offsetTop - 1000) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
// video editing
let videoList = document.querySelectorAll(".video-list-container .list");

videoList.forEach((vid) => {
  vid.onclick = () => {
    videoList.forEach((remove) => remove.classList.remove("active"));
    vid.classList.add("active");
    let src = vid.querySelector(".list-video").src;
    let title = vid.querySelector(".list-title").innerHTML;
    document.querySelector(".main-video-container .main-video").src = src;
    document.querySelector(".main-video-container .main-video").play();
    document.querySelector(".main-video-container .main-vid-title").innerHTML =
      title;
  };
});

//Increase Numbers On Scrolling
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // fuction didnt start

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
