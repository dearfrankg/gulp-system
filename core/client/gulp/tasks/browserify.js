var browserify = require('browserify');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var handleErrors = require('../util/handleErrors');

module.exports = function() {
    return browserify({
            entries: ['./app/modules/main.coffee'],
            extensions: ['.coffee']
        })
        .bundle({debug: true})
        .on('error', handleErrors)
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/'))

};
