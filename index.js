const countdown = () => {
  const countDate = new Date("November 25, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  // Break down the time from ms to day
  // Recall 1000ms makes 1s
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the actual time
  const textDay = Math.floor(gap / day);
  const textHours = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minute);
  const textSeconds = Math.floor((gap % minute) / second);

  // Get the time elements from html and update it
  document.querySelector(".days").textContent = textDay;
  document.querySelector(".hours").textContent = textHours;
  document.querySelector(".mins").textContent = textMinutes;
  document.querySelector(".secs").textContent = textSeconds;
};

// set an interval so it updates automatically after said time
setInterval(countdown, 1000);
