var gulp = require('gulp');
var karma = require('karma').server;


// var karmaCommonConf = require('../../test/karma.conf.js');

var karmaCommonConf = {
    files: [
        'build/app.js',
        'build/assets/bower_components/angular-mocks/angular-mocks.js',
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
gulp.task('unit', ['browserify'], function (done) {
  karma.start(karmaCommonConf, done);
});





