function updateTime() {
    const extinctionYears = 66_000_000;
    const secondsInAYear = 365.25 * 24 * 60 * 60;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);

    const totalSecondsSinceExtinction = currentTimeInSeconds + (extinctionYears * secondsInAYear);

    const years = Math.floor(totalSecondsSinceExtinction / secondsInAYear);
    const hours = Math.floor(totalSecondsSinceExtinction / (60 * 60));
    const minutes = Math.floor(totalSecondsSinceExtinction / 60);
    const seconds = Math.floor(totalSecondsSinceExtinction);

    document.getElementById("years").textContent = `Years: ${years.toLocaleString()} years`;
    document.getElementById("hours").textContent = `Hours: ${hours.toLocaleString()} hours`;
    document.getElementById("minutes").textContent = `Minutes: ${minutes.toLocaleString()} minutes`;
    document.getElementById("seconds").textContent = `Seconds: ${seconds.toLocaleString()} seconds`;
}

setInterval(updateTime, 1000);
updateTime();