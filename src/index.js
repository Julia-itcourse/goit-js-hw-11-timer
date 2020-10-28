import css from "./css/style.css";

const refs = {
  sec: document.querySelector('[data-value="secs"]'),
  min: document.querySelector('[data-value="mins"]'),
  hour: document.querySelector('[data-value="hours"]'),
  day: document.querySelector('[data-value="days"]'),
};

const timer = {
  start() {
    const targetTime = new Date("Dec 31, 2020");

    setInterval(() => {
      const currentTime = Date.now();

      const delta = targetTime - currentTime;

      updateTime(delta);
    }, 1000);
  },
};

const updateTime = (time) => {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  updateValues(secs, mins, hours, days);
};

const updateValues = (secs, mins, hours, days) => {
  refs.sec.textContent = secs;
  refs.min.textContent = mins;
  refs.hour.textContent = hours;
  refs.day.textContent = days;
};

const pad = (value) => {
  return String(value).padStart(2, "0");
};

timer.start();
