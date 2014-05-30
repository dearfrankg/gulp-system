var gulp       = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(){

    gulp.watch(['app/**/*.{js,coffee,tpl.html}', '!app/**/*Spec.{js,coffee}'], ['browserify']);
    gulp.watch(['app/**/*.scss', 'app/**/*.css'], ['sass']);
    gulp.watch('app/assets/images/**', ['images']);
    gulp.watch('app/**/*.html', ['copy-index']);

    // livereload();
};