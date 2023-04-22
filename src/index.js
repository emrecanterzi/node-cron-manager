const cron = require("node-cron");

class CronJobManager {
  #jobs = {};
  #store = {};

  constructor(store, startStore = true) {
    this.#store = store;
    if (startStore) {
      this.startStore();
    }
  }

  addJob({ name, patern, fn }) {
    this.#jobs[name] = cron.schedule(patern, fn, {});
  }
  removeJob(name) {
    this.#jobs[name].stop();
    const newJobs = {};
    Object.keys(this.#jobs).forEach((key) => {
      if (key != name) newJobs[key] = this.#jobs[key];
    });
    this.jobs = newJobs;
  }
  stopJob(name) {
    this.#jobs[name].stop();
  }
  startJob(name) {
    this.#jobs[name].start();
  }

  startStore() {
    if (this.#store) {
      Object.keys(this.#store).forEach(async (job) => {
        const cronJob = await this.#store[job]();
        this.addJob(cronJob);
      });
    }
  }
}

module.exports = CronJobManager;
