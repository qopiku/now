function twelveHour(hour) {
  return hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
}

function dateTime() {
  var today = new Date();
  var hours = today.getHours();
  var hour = twelveHour(hours).toString().padStart(2, "0");
  var minutes = today.getMinutes().toString().padStart(2, "0");
  var seconds = today.getSeconds().toString().padStart(2, "0");

  if (today.getHours() >= 12) {
    seconds += " PM";
  } else {
    seconds += " AM";
  }

  if (hours < 12) {
    greet = "Good Morning";
  } else if (hours >= 12 && hours <= 17) {
    greet = "Good Afternoon";
  } else if (hours >= 17 && hours <= 24) {
    greet = "Good Evening";
  }

  document.getElementById("date").innerHTML = today.toDateString();
  document.getElementById("greet").innerHTML = greet;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;

  setTimeout(dateTime, 500);
}

dateTime();
