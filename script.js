let h = document.querySelector(".h");
let m = document.querySelector(".m");
let s = document.querySelector(".s");
const initialValue = `00`;
// buttons
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
// countDouwn function
startBtn.addEventListener("click", myCount);

function myCount() {
  const x = setInterval(() => {
    //   second
    // reset this function if all input were 0
    if (
      s.value == initialValue &&
      m.value == initialValue &&
      h.value == initialValue
    ) {
      reseter();
      alert("Please Enter a value !");
    }
    // end
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
    // stop countDown when all the numbers are 0
    if (
      s.value == initialValue &&
      m.value == initialValue &&
      h.value == initialValue
    ) {
      clearInterval(x);
    }
    // Stop button
    stopBtn.addEventListener("click", stopper);
    function stopper() {
      clearInterval(x);
      // show start button after click on stop or reset button
      startBtn.style.display = "block";
    }
    // Reset button
    resetBtn.addEventListener("click", reseter);
    function reseter() {
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
      reseter();
    }
  }, 1000);
  // disappear start button after click on it
  if (x) {
    startBtn.style.display = "none";
  }
}
