let basePage = require('./base-page');

let HomePage = function () {

    let customerLoginButtonText = 'Customer Login';
    let customerLoginPartialButtonText = 'Customer';
    let managerLoginButtonText = 'Bank Manager Login';

    this.clickOnLoginAsCustomer = () => {
        // basePage.clickElementByButtonText(customerLoginButtonText);
        basePage.clickElementByPartialButtonText(customerLoginPartialButtonText);
    }

    this.clickOnLoginAsBankManager = () => {
        basePage.clickElementByButtonText(managerLoginButtonText);
    }
}

module.exports = new HomePage();