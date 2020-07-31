let ProtractorUtils = function () {

    this.goTo = (url) => {
        browser.get(url);
    }

    this.clickElementByButtonText = (btnText) => {
        element(by.buttonText(btnText)).click();
    }

    this.getPageTitle = () => {
        return browser.getTitle();
    }

    this.printAnyValue = (text) => {
        console.log(text);
    }

    this.selectFromDropdown = (dropdownElements, valueToSelect) => {

        dropdownElements.then((allDropdownOptions) => {
            console.log("The size of the dropdown list is : " + allDropdownOptions.length);
            for(let i = 0; i < allDropdownOptions.length; i++){
                let currentDropdownOption = allDropdownOptions[i].getText().then((text) => {
                    console.log("Current dropdown option is : "+text);
                    if(text == valueToSelect){
                        allDropdownOptions[i].click();
                        browser.sleep(3000);
                    }
                });
            }
        });
    }
}

module.exports = new ProtractorUtils();