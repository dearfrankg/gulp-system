'use strict';

// Note run the server on port 80 to use these tests

describe('App', function() {

    it('should redirect index.html to index.html#/splash', function() {
        browser.get('/index.html');
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/splash');
        });
    });

});

