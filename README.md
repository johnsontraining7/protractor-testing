Adding the node_modules to the project:

1. Add npm init to create package.json
2. Start adding scripts, main, dependencies, devDependencies as much as you need.
3. npm install

Jasmine Allure Reporting:

1. Install allure reporter for jasmine using below command -
    npm i jasmine-allure-reporter

2. Adding 'onPrepare' function to your config conf.js.

    '
    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            });
        });
    }'

3. To generate HTML reports use allure-commandline, install using below command -
    npm install allure-commandline --save-dev

4. To your scripts add a pre/post script to generate HTML allure reports-
    "scripts": {
    "pretest": "rm -rf allure-report",
    "test": "protractor conf.js || :",
    "posttest": "allure generate allure-results --clean -o allure-report || true"
    }

5. To view your result in chrome and overcome the ajax request loading issue, install any http-server, below is an example of node http-server
    npm install -g http-server

6. Navigate to your reports folder using cd and run the below command
    http-server -p9000 -o 
    
    Here, by default it runs on port 8080 if -p is not given, -o for opening the reports in default browser.

Winston Logging:

1. Install winston
	npm install winston

2. Add <logger-name>.js with below configurations -

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;
 
const logger = createLogger({
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [new transports.File({ filename: 'winston-basic.log' })]
});

module.exports = logger;

3. Add the logger require in the specs and use the object to set the log level and use the logger-
'
let logger = require('./log.js');
logger.log('info', 'Logging some information');
'

4. That's all execute the code..!
//Logging levels, trace, debug, info, warn, error, fatal

