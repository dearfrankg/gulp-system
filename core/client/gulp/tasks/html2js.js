var gulp    = require('gulp');
var html2js = require('gulp-ng-html2js');
var concat  = require('gulp-concat')

gulp.task('html2js', function() {

    return gulp.src('./app/**/*.tpl.html')
        .pipe(html2js({
            moduleName: 'MyPartials',
            prefix: ''
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./app/.tmp'));

});