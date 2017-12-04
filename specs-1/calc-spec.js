describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/')

    expect(browser.getTitle()).toEqual('Super Calculator')
  });

  it('should add', function() {
      browser.get('http://juliemr.github.io/protractor-demo/')

      let firstInput = element(by.model('first'))
      let secondInput = element(by.model('second'))
      let button = element(by.id('gobutton'))
      let result = element(by.tagName('h2'))

      firstInput.sendKeys('2')
      secondInput.sendKeys('2')

      button.click()

      expect(result.getText()).toEqual('4')
    });
});