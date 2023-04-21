// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBqZZau44UfsioSuU2GFfavruiuv8k4Opo",
  authDomain: "webfirebase-74a3f.firebaseapp.com",
  projectId: "webfirebase-74a3f",
  storageBucket: "webfirebase-74a3f.appspot.com",
  messagingSenderId: "1013819772272",
  appId: "1:1013819772272:web:2b377540bbe5d84a92d3b5",
  measurementId: "G-EXQE821Y91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Set the countdown date and time
var countdownDate = new Date().getTime() + (1 * 60 * 60 * 1000) + (30 * 60 * 1000); // 1 hour 30 minutes from now

// Define a variable to hold the countdown timer interval
var countdownTimer;

// Function to start the countdown timer
function startCountdown() {
  // Update the countdown every second
  countdownTimer = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();
    
    // Calculate the time remaining until the countdown date and time
    var timeRemaining = countdownDate - now;
    
    // Calculate the hours, minutes, and seconds remaining
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Display the hours, minutes, and seconds remaining in the countdown timer
    document.getElementById("countdown-hours").innerHTML = hours;
    document.getElementById("countdown-minutes").innerHTML = minutes;
    document.getElementById("countdown-seconds").innerHTML = seconds;
    
    // Store the countdown time in Firebase Realtime Database
    database.ref("countdownTime").set({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }, 1000);
}

// Event listener for the start button
document.getElementById("start-button").addEventListener("click", startCountdown);
