var gulp = require('gulp');
var ngmin = require('gulp-ngmin');

module.exports = function() {

    return gulp.src('./dist/app.js')
        .pipe(ngmin())
        .pipe(gulp.dest('dist'));

};
