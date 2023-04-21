var countdownEl = document.getElementById("countdown");
var startBtnEl = document.getElementById("startBtn");

var countdownTime = 5400000; // 1 hour 30 minutes in milliseconds

function startCountdown() {
  // Disable the "Start" button
  startBtnEl.disabled = true;

  // Get the current date and time
  var now = new Date().getTime();

  // Set the date and time when the countdown should end
  var countDownDate = now + countdownTime;

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
    }
  }, 1000);
}
