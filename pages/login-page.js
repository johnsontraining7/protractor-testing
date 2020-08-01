let basePage = require('./base-page');

let LoginPage = function() {

    // let allDropdownElements = element.all(by.xpath('//option'));
    let allDropdownElements = element.all(by.repeater('cust in Customers'));
    let loginButtonText = 'Login';

    this.loginAsCustomer = (customerName) => {

        basePage.selectFromDropdown(allDropdownElements, customerName);
        basePage.clickElementByButtonText(loginButtonText);
    }

}

module.exports = new LoginPage();