function clock() {
    const fullDate = new Date();
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    const seconds = fullDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("hour").innerHTML = hours
    document.getElementById("minute").innerHTML = ":" + minutes
    document.getElementById("second").innerHTML = ":" + seconds
}

setInterval(clock,1000);