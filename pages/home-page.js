let basePage = require('./base-page');

let HomePage = function () {

    let customerLoginButtonText = 'Customer Login';
    let managerLoginButtonText = 'Bank Manager Login';

    this.clickOnLoginAsCustomer = () => {
        basePage.clickElementByButtonText(customerLoginButtonText);
    }

    this.clickOnLoginAsBankManager = () => {
        basePage.clickElementByButtonText(managerLoginButtonText);
    }
}

module.exports = new HomePage();