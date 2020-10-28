import css from "./css/style.css";

class CountdownTimer {
  constructor(selector, targetDate) {
    console.log("creating timer instance");
    this.targetDate = targetDate;
    this.sec = document.querySelector(`${selector} [data-value="secs"]`);
    this.min = document.querySelector(`${selector} [data-value="mins"]`);
    this.hour = document.querySelector(`${selector} [data-value="hours"]`);
    this.day = document.querySelector(`${selector} [data-value="days"]`);
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;

      this.updateTime(delta);
    }, 1000);
  }

  updateTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.updateValues(secs, mins, hours, days);
  }

  updateValues(secs, mins, hours, days) {
    this.sec.textContent = secs;
    this.min.textContent = mins;
    this.hour.textContent = hours;
    this.day.textContent = days;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer("#timer-1", new Date("Dec 31, 2020"));
timer.start();
