const morgan = require('morgan');
const rfs = require("rotating-file-stream");
const path = require('path');



class LoggingModule {

  constructor() {
    if (process.env.LOGGING_ENABLE == 0) {
      console.log("Logging not enabled");
    }
  }

  custom_format(tokens, req, res) {

    let date = tokens.date(req, res)
    const padded_date = date.padEnd(30, ' ')
  
    let status = tokens.status(req, res);
    const padded_status = status.padEnd(5, ' ');
  
    let method = tokens.method(req, res);
    const padded_method = method.padEnd(7, ' ');
  
    let response_time = tokens['response-time'](req, res) + ' ms';
    const padded_response_time = response_time.padEnd(12, ' ');
  
    let urlll = tokens.url(req, res);
  
    return [
      padded_date,
      padded_status,
      padded_method,
      padded_response_time,
      urlll
    ].join('')
  }

  Setup(app) {
    if (process.env.LOGGING_ENABLE == 1) {

      const accessLogStream = rfs.createStream('access.log', {
        interval: '1d', // rotate daily
        path: path.join('../logs')
      })
      const errorLogStream = rfs.createStream('error.log', {
        interval: '1d', // rotate daily
        path: path.join('../logs')
      })

      app.use(morgan(this.custom_format, { stream: accessLogStream,                                                         }));
      app.use(morgan(this.custom_format, { stream: errorLogStream , skip : function(req, res) { return res.statusCode < 400}}));
    
    }
  }
}

module.exports = new LoggingModule();