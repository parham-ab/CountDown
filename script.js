// "use strict";
let h = document.querySelector(".h");
let m = document.querySelector(".m");
let s = document.querySelector(".s");
let myAudio = document.querySelector("#sound");
const initialValue = `00`;
// buttons
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
// countDown function
startBtn.addEventListener("click", myCount);

function myCount() {
  const x = setInterval(() => {
    // reset this function if all input's were 0
    if (
      s.value == initialValue &&
      m.value == initialValue &&
      h.value == initialValue
    ) {
      resetter();
      alert("Please Enter a value !");
      startBtn.classList.add("animate__animated", "animate__fadeInDown");
    }
    // end
    if (+s.value > 59 || +m.value > 59) {
      resetter();
      alert("Minute & Second must be lower than 59!");
    }
    if (+h.value > 24) {
      resetter();
      alert("Hours must be lower than 24!");
    }
    // second
    s.value--;
    if (s.value == -1) {
      s.value = 59;
      m.value--;
    }
    if (s.value.length == 1) {
      s.value = `0${s.value}`;
    }
    // minute
    if (m.value == -1) {
      m.value = 59;
      h.value--;
    }
    if (m.value.length == 1) {
      m.value = `0${m.value}`;
    }
    // hours
    if (h.value.length == 1) {
      h.value = `0${h.value}`;
    }
    // prevent countDown show less than 0 numbers
    if (h.value < initialValue) {
      s.value = initialValue;
      m.value = initialValue;
      h.value = initialValue;
    }
    // play sound in last 3 seconds
    if (h.value == 00 && m.value == 00 && s.value == 03) {
      myAudio.play();
      stopBtn.addEventListener("click", function () {
        myAudio.play() && myAudio.pause();
      });
      resetBtn.addEventListener("click", function () {
        myAudio.play() && myAudio.pause();
      });
    }
    // change second color to red in last 3 seconds
    if (
      (h.value == 00 && m.value == 00 && s.value == 03) ||
      s.value == 02 ||
      s.value == 01
    ) {
      s.style.color = "#e35858";
    } else {
      s.style.color = "#fff";
    }
    // stop countDown when all the numbers are 0
    if (
      s.value == initialValue &&
      m.value == initialValue &&
      h.value == initialValue
    ) {
      clearInterval(x);
      startBtn.classList.add("animate__animated", "animate__fadeInDown");
    }
    // Stop button
    stopBtn.addEventListener("click", stopper);
    function stopper() {
      clearInterval(x);
      // show start button after click on stop or reset button
      startBtn.style.display = "block";
      startBtn.classList.add("animate__animated", "animate__fadeInDown");
    }
    // Reset button
    resetBtn.addEventListener("click", resetter);
    function resetter() {
      stopper();
      s.value = initialValue;
      m.value = initialValue;
      h.value = initialValue;
    }
    // reset countdown if the input number was less than 0
    if (
      h.value.startsWith("-") ||
      m.value.startsWith("-") ||
      s.value.startsWith("-")
    ) {
      resetter();
    }
    // automatically reset the app when time's up!
    if (
      startBtn.style.display == "none" &&
      h.value &&
      m.value == 00 &&
      s.value == 00
    )
      resetter();
  }, 1000);
  // disappear start button after click on it
  if (x) {
    startBtn.style.display = "none";
  }
}
