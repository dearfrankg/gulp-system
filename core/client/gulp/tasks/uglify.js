var
gulp         = require('gulp'),
uglify       = require('gulp-uglify');
handleErrors = require('../util/handleErrors');

var header = require('gulp-header');
var banner = require('./banner').banner();
var pkg = require('../../../../package.json');

module.exports = function() {

    var opts = {};

    return gulp.src('./dist/app.js')
        .pipe(uglify(opts))
        .on('error', handleErrors)
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/'))

};