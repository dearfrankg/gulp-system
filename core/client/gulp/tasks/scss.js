var es           = require("event-stream");
var sass         = require('gulp-sass');
var gulp         = require('gulp');
var livereload   = require('gulp-livereload');
var concat       = require('gulp-concat')
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');
var prefix       = require('gulp-autoprefixer');


gulp.task('scss', function(){

    return es.concat(
            gulp.src([
                './app/assets/bower_components/bootstrap/dist/css/bootstrap.css'
                // './app/assets/styles/pure-layout.css',
                // './app/index/index.css'
            ]),
            gulp.src('./app/modules/main.scss')
                .pipe(sass()
            )
        )
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build/'))

});
