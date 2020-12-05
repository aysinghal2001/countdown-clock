var start;
  var running = false
  var btn = document.getElementById("startbtn")
  var display = document.querySelector('#time');

  document.getElementById("error").style.display = "none";

  var options = { weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour12: true, hour: 'numeric',
    minute: 'numeric', second: 'numeric'};

  setInterval(function () {
    let time = new Date()
    clock = document.getElementById("clock")

    clock.textContent = time.toLocaleString('en-GB', options)
  }, 1000)

  setInterval(function () {
    let time_tokyo = new Date()
    let zone = document.getElementById("tokyo")
    let new_options = Object.assign({timeZone: 'Asia/Tokyo'}, options)

    zone.textContent = time_tokyo.toLocaleString('en-GB', new_options)
  }, 1000)

  setInterval(function () {
    let time_brisbane = new Date()
    let zone = document.getElementById("brisbane")
    let new_options = Object.assign({timeZone: 'Australia/Brisbane'}, options)

    zone.textContent = time_brisbane.toLocaleString('en-GB', new_options)
  }, 1000)

  setInterval(function () {
    let time_la = new Date()
    let zone = document.getElementById("la")
    let new_options = Object.assign({timeZone: 'America/Los_Angeles'}, options)

    zone.textContent = time_la.toLocaleString('en-GB', new_options)
  }, 1000)

  setInterval(function () {
    let time_toronto = new Date()
    let zone = document.getElementById("toronto")
    let new_options = Object.assign({timeZone: 'America/Toronto'}, options)

    zone.textContent = time_toronto.toLocaleString('en-GB', new_options)
  }, 1000)

  function startTimer() {
    var hours = document.getElementById("hrs").value;
    var minutes = document.getElementById("mins").value;
    var seconds = document.getElementById("secs").value;
    btn.disabled = true
    running = true
    hours = Number(hours, 10)
    minutes = Number(minutes, 10)
    seconds = Number(seconds, 10)
    var timer = (hours * 3600) + (minutes * 60) + seconds;

    if (isNaN(timer)) {
      document.getElementById("error").style.display = "block";
      return 0;
    }

    start = setInterval(function () {
      hours = Math.floor(timer / 3600)
      minutes = Math.floor((timer / 60) - (hours * 60))
      seconds = timer % 60

      display.textContent = ("0" + hours).slice(-2) + ":" +
        ("0" + minutes).slice(-2) + ":" +
        ("0" + seconds).slice(-2);;

      timer -= 1;

      if (timer == -1) {
        clearInterval(start)
        display.textContent = "Time Up!";
        btn.disabled = false
        running = false
      }
    }, 1000)
  }

  function resetTimer() {
    if (running){
      clearInterval(start)
      btn.disabled = false
    }
    display.textContent = "hh:mm:ss"
  }
