var
gulp       = require('gulp'),
minifyCSS  = require('gulp-minify-css');
var rename = require('gulp-rename');

var header = require('gulp-header');
var banner = require('./banner').banner();
var pkg    = require('../../../../package.json');


module.exports = function() {

    var opts = {keepSpecialComments: 0};

     gulp.src('dist/app.css')
        .pipe(minifyCSS(opts))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('dist'))

        // .pipe(rename({basename: 'app-min'}))
};


