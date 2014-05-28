module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'build/app.js',
      'build/assets/bower_components/angular-mocks/angular-mocks.js',
      'app/**/*Spec.{js,coffee}'
    ],

    preprocessors: {
      '**/*.coffee': 'coffee'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-coffee-preprocessor',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};