var gulp = require('gulp');
var actions = require('./gulp/actions');

// console.log(actions);

// CSS
gulp.task('sass',                       actions.sass);
gulp.task('bundle-css', ['sass'],       actions['bundle-css']);
gulp.task('minify',     ['bundle-css'], actions.minify);

// IMAGES
gulp.task('images',                     actions['images']);

// COPY
gulp.task('copy-index',                 actions['copy-index']);
gulp.task('copy-assets',                actions['copy-assets']);
gulp.task('copy',       ['copy-index', 'copy-assets']);

// JS
gulp.task('html2js',                    actions.html2js);
gulp.task('browserify', ['html2js'],    actions.browserify);
gulp.task('ng-min',     ['browserify'], actions['ng-min']);
gulp.task('uglify',     ['ng-min'],     actions.uglify);

// BUILD
gulp.task('build',      ['browserify', 'copy', 'images', 'bundle-css']); // bundle-css must be last

// RELEASE
gulp.task('release',    ['uglify', 'copy', 'images', 'minify']); // minify must be last

// DEFAULT (TDD)
gulp.task('unit',       ['build'],      actions.unit);
gulp.task('serve',      ['build'],      actions.serve);
gulp.task('open',       ['build'],      actions.open);
gulp.task('watch',      ['build'],      actions.watch);
gulp.task('default',    ['unit', 'serve', 'open', 'watch']);

