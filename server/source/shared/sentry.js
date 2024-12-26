const sentry = require("@sentry/node");


class SentryModule {

    constructor() {
        if (process.env.SENTRY_ENABLE == 1) {
        sentry.init({
            dsn: "",
            // tracesSampleRate: 1.0,
            // debug: true,
            // release : "",
            // environment: "",
            // tunnel : "",
            // maxBreadcrumbs: 50,
            // attachStacktrace : false,
            // serverName : "",
            // ignoreErrors: "",
            // ignoreTransactions : "",
            // autoSessionTracking : true, 
            // initialScope
            // maxValueLength : 250,
            // normalizeDepth : 
            // enabled : true,
            // sendClientReports: false,
            // includeLocalVariables : false 
          });
        } else {
            console.log("Sentry not enabled");
        }
    }

    SetupExpress(app) {
        if (process.env.SENTRY_ENABLE == 1) {
            sentry.setupExpressErrorHandler(app);
        }
    }

    CaptureMessage(message) {
        if (process.env.SENTRY_ENABLE == 1) {
            sentry.captureMessage(message);
        }
    }

    CaptureException(exception) {
        if (process.env.SENTRY_ENABLE == 1) {
            sentry.captureException(exception);
        }
    }
}

module.exports = new SentryModule();