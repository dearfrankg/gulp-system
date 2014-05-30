var gulp = require('gulp');
var karma = require('karma').server;


module.exports = function (done) {


    var karmaCommonConf = {
        files: [
            'dist/app.js',
            'dist/assets/bower_components/angular-mocks/angular-mocks.js',
            'app/**/*Spec.{js,coffee}'
        ],
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins : [
            'karma-coffee-preprocessor',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],
        preprocessors: {
          'app/**/*.coffee': 'coffee'
        }
    };

    /**
     * Watch for file changes and re-run tests on each change
     */
    karma.start(karmaCommonConf, done);


};


