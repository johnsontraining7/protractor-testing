let logger = require('../log');
describe('Jasmine matchers test', () => {

    let pageTitle;
    beforeAll(() => {

        logger.log('info', 'Navigating to the protractor homepage')
        browser.get('http://protractortest.org');
        logger.log('info', 'Getting the protractor homepage title')
        pageTitle = browser.getTitle();
        logger.log('info', 'Sleeping for 3 seconds')
        browser.sleep(3000);
    });

    it(' - match equals using to Be', () => {

        logger.log('info', 'Checking if match is equal')
        expect(pageTitle).toBe('Protractor - end-to-end testing for AngularJS');
    });

    it(' - match not equals using to Be', () => {

        logger.log('info', 'Checking if match is not equal')
        expect(pageTitle).not.toBe('Protractor - end-to-end testing for AngularJS');
    });

    it(' - match contains text', () => {

        logger.log('info', 'Checking if match contains a text')
        expect(pageTitle).toMatch('Protractor - end-to-end testing');
    });
});