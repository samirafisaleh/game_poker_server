const Queue = require('bull');
const milliseconds = require("milliseconds");

class BullModule {

    constructor() {

        this.scheduler1 = new Queue("sampleQueue", {
            defaultJobOptions: {
                repeat: {
                    every: milliseconds.days(1)
                }
            }
        });
    }

    Start() {
        if (process.env.REDIS_ENABLE == 1 && 
            process.env.BULL_ENABLE == 1) {

                this.scheduler1.add({});
        } else {
            console.log("Bull not enabled")
        }
    }


    ProcessSchedule1() {
        this.scheduler1.process((_, done) => {
            console.log("Scheduled job");
            done();
          });
    }

}


module.exports = new BullModule();