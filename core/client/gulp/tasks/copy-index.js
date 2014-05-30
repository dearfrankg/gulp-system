var gulp = require('gulp');

module.exports = function() {

    var options = {
        read: false
    }

    return gulp.src(["app/index.html"])
        .pipe(gulp.dest('dist/', options));


};