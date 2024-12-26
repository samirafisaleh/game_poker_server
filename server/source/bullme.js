

// const Queue = require("bull");
// const milliseconds = require("milliseconds");

// const scheduler = new Queue("schedulerQueue", {
//     defaultJobOptions: { repeat: { every: milliseconds.seconds(5) } },
//   });
  
//   const main = async () => {
//     await scheduler.add({});
//   };

// scheduler.process((_, done) => {
//     console.log("Scheduled job");
//     done();
//   });
  
//   main().catch(console.error);