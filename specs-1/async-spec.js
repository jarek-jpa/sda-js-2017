describe('Async test', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/')

        console.log('step 1')

        // console.log(element(by.tagName('h2')).getText());
        element(by.tagName('h2')).getText().then(function (t) { console.log('wynik: ' + t); });

        console.log('step 2')
    });


});