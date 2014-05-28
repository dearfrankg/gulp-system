
var gulp       = require('gulp');
var changed    = require('gulp-changed');


gulp.task('copy', function() {
    var index = './app/index.html';
    var dest = './build/';
    var options = {
        read: false
    };

    gulp.src("app/assets/**")
    .pipe(gulp.dest('./build/assets', options));

    return gulp.src(index)
        .pipe(changed(dest)) // Ignore unchanged files
        .pipe(gulp.dest(dest));


});


