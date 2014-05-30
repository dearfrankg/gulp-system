var
gulp   = require('gulp'),
concat = require('gulp-concat');

var header = require('gulp-header');
var banner = require('./banner').banner();
var pkg = require('../../../../package.json');

module.exports = function() {

    gulp.src( [
        './app/lib.js',
        './dist/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./dist'));

};