var gulp         = require('gulp');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');



// var es           = require("event-stream");
// var livereload   = require('gulp-livereload');
// var concat       = require('gulp-concat')
// var notify       = require('gulp-notify');
// var handleErrors = require('../util/handleErrors');
// var prefix       = require('gulp-autoprefixer');
// var source       = require('vinyl-source-stream');


module.exports = function() {

    return gulp.src('./app/modules/main.scss')
        .pipe(sass())
        .pipe(rename({basename: 'app'}))
        .pipe(gulp.dest('dist/'));

};



