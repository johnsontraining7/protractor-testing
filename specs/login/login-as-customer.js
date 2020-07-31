let logger = require('../../log');
let basePage = require('../../pages/base-page');
let homePage = require('../../pages/home-page');
var loginPage = require('../../pages/login-page');
var protractorUtils = require('../../utils/protractor-utils');

describe('Bank app suite', () => {

    beforeAll(() => {

        logger.log('info', 'navigating to bank app home page');
        basePage.goTo(url);
    });

    let url = 'http://www.way2automation.com/angularjs-protractor/banking/#/login';
    it(' - test login as customer', () => {

        logger.log('info', 'clicking on login as customer');
        homePage.clickOnLoginAsCustomer();

        logger.log('info', 'clicking on login as with name `Albus Dumbledore`');
        loginPage.loginAsCustomer('Albus Dumbledore');
        
        logger.log('info', 'Validating if login successful using page title');
        expect(basePage.getPageTitle()).toBe('Protractor practice website - Banking App');

        protractorUtils.printAnyValue('Success');
    });
});