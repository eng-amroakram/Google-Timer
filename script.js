let stopwatchInterval;
let stopwatchTime = 0;
let isStopwatchRunning = false;

let counterInterval;
let counterValue = 0;
let isCounterRunning = false;

function openTab(event, tabName) {
  const tabcontents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  const tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#f2f2f2";
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.style.backgroundColor = "#ccc";
}

function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
}

function startStopwatch() {
  if (!isStopwatchRunning) {
    const duration = parseInt(document.getElementById("stopwatchDuration").value);
    if (isNaN(duration) || duration <= 0) {
      alert("Please enter a valid duration in seconds.");
      return;
    }
    stopwatchTime = duration;
    isStopwatchRunning = true;
    stopwatchInterval = setInterval(() => {
      if (stopwatchTime > 0) {
        stopwatchTime--;
        document.getElementById("stopwatchDisplay").innerText = formatTime(
          stopwatchTime
        );
      } else {
        stopStopwatch();
      }
    }, 1000);
  }
}

function stopStopwatch() {
  if (isStopwatchRunning) {
    clearInterval(stopwatchInterval);
    isStopwatchRunning = false;
  }
}

function resetStopwatch() {
  stopStopwatch();
  document.getElementById("stopwatchDuration").value = "";
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").innerText = formatTime(
    stopwatchTime
  );
}

function startCounter() {
  if (!isCounterRunning) {
    const duration = parseInt(document.getElementById("counterDuration").value);
    if (isNaN(duration) || duration <= 0) {
      alert("Please enter a valid duration in seconds.");
      return;
    }
    counterValue = duration;
    isCounterRunning = true;
    counterInterval = setInterval(() => {
      if (counterValue > 0) {
        counterValue--;
        document.getElementById("counterDisplay").innerText = counterValue;
      } else {
        stopCounter();
      }
    }, 1000);
  }
}

function stopCounter() {
  if (isCounterRunning) {
    clearInterval(counterInterval);
    isCounterRunning = false;
  }
}

function resetCounter() {
  stopCounter();
  document.getElementById("counterDuration").value = "";
  counterValue = 0;
  document.getElementById("counterDisplay").innerText = counterValue;
}
