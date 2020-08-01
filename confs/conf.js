exports.config = {
    directConnect: true,
    multiCapabilities: [
        {
            'browserName' : 'chrome'
        },
        {
            'browserName' : 'firefox'
        },
        {
            'browserName' : 'chrome'
        }
    ],
    framework: 'jasmine2',
    specs: ['../specs/login/login-as-customer.js'],
    suites: {
        create_mail: ['./gmail-create-mail/*.js'],
        inbox: ['./gmail-inbox/*.js'],
        login: ['./gmail-login/*.js'],
        smoke: ['./smoke/*.js'],
        sanity: ['./sanity/*.js'],
        regression: ['./regression/*.js'],
        all: ['./*/*.js']

    },
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
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    }
}