# CronJobManager

This package is for cron jobs and to make them easier.

#### How to Use:

```javascript
const CronJobManager = require("cron-manager-node"); // import package

const cronJobManager = new CronJobManager(); // create a manager

cronJobManager.addJob({
  // add a job
  name: "job1", // a name for job
  patern: "*/3 * * * * *", // cron job patern
  fn: () => {
    // function
    console.log("here");
  },
});

cronJobManager.stopJob("job1"); // stop job
cronJobManager.startJob("job1"); // start job
cronJobManager.removeJob("job1"); // remove job
```

### You can specify jobs when creating instances

```javascript
const jobCreator1 = () => {
  return {
    name: "job1", // a name for job
    patern: "*/3 * * * * *", // cron job patern
    fn: () => {
      // function
      console.log("here");
    },
  };
};
const jobCreator2 = () => {
  return {
    name: "job2", // a name for job
    patern: "*/3 * * * * *", // cron job patern
    fn: () => {
      // function
      console.log("here");
    },
  };
};

const cronJobManager = new CronJobManager(
  { jobCreator1, jobCreator2 }, // cron job creators object
  true // the default is true, if you specify false you can use "manager.startStore();".
);
```
