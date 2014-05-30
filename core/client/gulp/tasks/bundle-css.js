var gulp         = require('gulp');
var concat       = require('gulp-concat')

module.exports = function() {

    gulp.src([
        './app/assets/bower_components/bootstrap/dist/css/bootstrap.css',
        './dist/app.css'
    ])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist/'))

};

