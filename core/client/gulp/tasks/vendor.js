var
gulp   = require('gulp'),
concat = require('gulp-concat');


module.exports = function() {

    gulp.src( [
        './app/assets/bower_components/jquery/jquery.min.js',
        './app/assets/bower_components/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/'));

};