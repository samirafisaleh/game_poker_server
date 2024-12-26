
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require("express");
const http = require('http');
const path = require('path');


const bullapi = require("./shared/bull");
const loggingapi = require("./shared/logging");
const mongodbapi = require("./shared/mongodb");
require("./shared/redis");
const sentryapi = require("./shared/sentry");
const socketapi = require("./shared/socket");







const actionRouter = require('./routes/action');
const indexRouter = require('./routes/index');
const playerRouter = require('./routes/player');
const sessionRouter = require('./routes/session');


/***************************
 *
 * Initialize Express and Socket
 * 
***************************/
const app = express()
const server = http.createServer(app);
socketapi.io.attach(server);


/***************************
 *
 * Logging configuration: Setup the views and pages
 * 
***************************/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


/***************************
 *
 * Logging configuration: Morgan
 * 
***************************/
loggingapi.Setup(app)

/***************************
 *
 * Logging configuration: Sentry
 * 
***************************/
sentryapi.SetupExpress(app);

/***************************
 *
 * Task configuration: Bull
 * 
***************************/
bullapi.Start()


/***************************
 *
 * Additional middleware
 * 
***************************/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/***************************
 *
 * Routers
 * 
***************************/
app.use('/', indexRouter);
app.use('/player', playerRouter);
app.use('/action', actionRouter);
app.use('/session', sessionRouter);


/***************************
 *
 * Application Error Handling
 * 
***************************/
app.use(function(req, res, next) {
  next(createError(404));
});
  
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




/***************************
 *
 * Start the server
 * 
***************************/
const start = async () => {
  try {

    if (process.env.DB_ENABLE == 1) {
      mongodbapi.DatabaseModule.Initialize()
    }

    server.listen(3000, () => console.log("Poker Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};


start();

// This will allow test to run
module.exports = server