
const ioredis = require('ioredis');

class RedisModule {

    constructor() {
        if (process.env.REDIS_ENABLE == 1) {
            this.redis = new ioredis.Redis()
        } else {
            console.log("Redis not enabled");
        }
    }
}

module.exports = new RedisModule();