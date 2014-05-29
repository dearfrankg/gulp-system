'use strict';

// Note run the server on port 80 to use these tests

describe('App', function() {

    it('should redirect / to /#/phones', function() {
        browser.get('/');
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/phones');
        });
    });

});

