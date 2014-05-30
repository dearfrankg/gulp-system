var gulp = require('gulp');

module.exports = function() {

    var options = {
        read: false
    }

    return gulp.src(["app/assets/**/*"])
        .pipe(gulp.dest('dist/assets', options));

};