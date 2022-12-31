function date() {
    var today = new Date();
    document.getElementById('date').innerHTML = today.toDateString();
}

function clock() {
    var today = new Date();
    var hour = zeros(twelveHour(today.getHours()));
    var minutes = zeros(today.getMinutes());
    var seconds = zeros(today.getSeconds());

    if (today.getHours() >= 12) {
        seconds += " pm";
    } else {
        seconds += " am";
    }

    var hrs = today.getHours();
    if (hrs < 12) {
        greet = 'Good Morning  ';
    } else if (hrs >= 12 && hrs <= 17) {
        greet = 'Good Afternoon ';
    } else if (hrs >= 17 && hrs <= 24) {
        greet = 'Good Evening  ';
    }

    document.getElementById('greet').innerHTML = greet;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
}

function twelveHour(hour) {
    if (hour > 12) {
        return hour -= 12;
    } else if (hour === 0) {
        return hour = 12;
    } else {
        return hour;
    }
}

function zeros(num) {
    if (num < 10) {
        num = '0' + num;
    }

    return num;
}

function dateTime() {
    date();
    clock();
    setTimeout(dateTime, 500);
}

dateTime();
