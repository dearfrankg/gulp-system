var gulp = require('gulp');

gulp.task('release', ['unit', 'watch', 'serve', 'open']);
