import css from "./css/style.css";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.sec = document.querySelector(`${selector} [data-value="secs"]`);
    this.min = document.querySelector(`${selector} [data-value="mins"]`);
    this.hour = document.querySelector(`${selector} [data-value="hours"]`);
    this.day = document.querySelector(`${selector} [data-value="days"]`);
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      if (delta > 0) {
        this.updateTime(delta);
      } else {
        console.log("delta is < 0");
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
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

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
});
timer.start();
