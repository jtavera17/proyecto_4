function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour % 12) * 360 / 12 + (minute / 60) * 360 / 12;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (second / 60) * 360;

    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
    const digitalTime = document.getElementById("digital-time");

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const ampm = hour < 12 ? "AM" : "PM";
    const formattedHour = hour % 12 || 12;

    digitalTime.textContent = `${formattedHour}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();