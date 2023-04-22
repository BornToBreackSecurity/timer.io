      var countdownTime = 5400000;
      var countdownEl = document.getElementById("countdown");
        var now = new Date().getTime();

        var countDownDate = now + countdownTime;

        var x = setInterval(function() {
          var now = new Date().getTime();

          var distance = countDownDate - now;

          var hours = Math.floor(distance / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          countdownEl.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

          if (distance < 0) {
            clearInterval(x);
            countdownEl.innerHTML = "Expired";
          }
        }, 1000);
