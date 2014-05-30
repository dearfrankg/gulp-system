var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var livereload = require('gulp-livereload');

module.exports = function() {
    var dest = './dist/assets/images';

    return gulp.src('./app/assets/images/**')
        .pipe(changed(dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(dest))
};

