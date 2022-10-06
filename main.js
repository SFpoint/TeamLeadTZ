const buttons = document.querySelectorAll(".order_btn");

function order() {
  window.scrollTo({ top: 2400, behavior: "smooth" });
}

buttons.forEach((button) => {
  button.addEventListener("click", order);
});
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0;display:none">${i}</span>`
  );
  i++;
}

let width = 390;
let count = 1;

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0;

carousel.querySelector(".prev").onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};

document.addEventListener("DOMContentLoaded", function () {
  let deadline = 1800000;
  let i = 1;
  let timerId = null;
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  function countdownTimer() {
    const diff = deadline - 1000 * i++;
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    $minutes.dataset.title = declensionNum(minutes, [
      "minute",
      "minutes",
      "minutes",
    ]);
    $seconds.dataset.title = declensionNum(seconds, [
      "second",
      "seconds",
      "seconds",
    ]);
  }
  const $minutes = document.querySelector(".timer_minutes");
  const $seconds = document.querySelector(".timer_seconds");
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});

const changeHandler = (e) => {
  const value = e.value;
  e.value = value.replace(/\D/g, "");
};

const inputs = document.querySelectorAll('input[name="Hints"]');
inputs.forEach((input) => {
  var isHintShow = false;
  input.addEventListener("click", function () {
    if (isHintShow) {
      isHintShow = false;
      document.getElementById("Hint").style.display = "none";
    } else {
      isHintShow = true;
      document.getElementById("Hint").style.display = "block";
    }
  });
});
const obj = document.getElementById("form_order");
var rect = obj.getBoundingClientRect();
console.log(rect);
