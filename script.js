var countdownEl = document.getElementById("countdown");
var startBtnEl = document.getElementById("startBtn");

var countdownTime = 5400000; // 1 hour 30 minutes in milliseconds
var countDownDate;

function startCountdown() {
  // Disable the "Start" button
  startBtnEl.disabled = true;

  // Get the current date and time
  var now = new Date().getTime();

  // Set the date and time when the countdown should end
  countDownDate = now + countdownTime;

  // Save the countdown end time in browser storage
  localStorage.setItem("countDownDate", countDownDate);

  // Update the countdown every second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for hours, minutes, and seconds
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the "countdown" paragraph
    countdownEl.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    // Check if the countdown has expired
    if (distance <= 0) {
      clearInterval(x);
      countdownEl.innerHTML = "EXPIRED";
      startBtnEl.disabled = false;

      // Redirect the user to a new page
      window.location.href = "time_over.html";
    }
  }, 1000);
}

function loadCountdown() {
  // Load the countdown end time from browser storage
  var storedCountDownDate = localStorage.getItem("countDownDate");

  if (storedCountDownDate) {
    // Get the current date and time
    var now = new Date().getTime();

    // Find the distance between now and the stored countdown end time
    var distance = storedCountDownDate - now;

    // Check if the stored countdown end time has already passed
    if (distance <= 0) {
      countdownEl.innerHTML = "EXPIRED";
      startBtnEl.disabled = false;
    } else {
      // Set the countdown end time to the stored value
      countDownDate = storedCountDownDate;

      // Start the countdown
      startCountdown();
    }
  }
}
