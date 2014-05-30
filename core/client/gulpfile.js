var gulp = require('gulp');

// CSS
gulp.task('sass', require('./gulp/tasks/sass'));
gulp.task('minify', ['sass'], require('./gulp/tasks/minify'));

// IMAGES
gulp.task('images', require('./gulp/tasks/images'));

// COPY
gulp.task('copy-index', require('./gulp/tasks/copy-index'));
gulp.task('copy-assets', require('./gulp/tasks/copy-assets'));
gulp.task('copy', ['copy-index', 'copy-assets']);

// JS
gulp.task('html2js', require('./gulp/tasks/html2js'));
gulp.task('browserify', ['html2js'], require('./gulp/tasks/browserify'));
gulp.task('ng-min', ['browserify'], require('./gulp/tasks/ng-min'));
gulp.task('uglify', ['ng-min'], require('./gulp/tasks/uglify'));

// BUILD
gulp.task('build', ['browserify', 'sass', 'images']); // 'copy' causes bug:  libc++abi.dylib: terminating with uncaught exception of type std::logic_error: basic_string::_S_construct NULL not valid

// RELEASE
gulp.task('release', ['uglify', 'minify', 'images', 'copy']);

// DEFAULT (TDD)
gulp.task('unit', ['build'], require('./gulp/tasks/unit'));
gulp.task('serve', ['build'], require('./gulp/tasks/serve'));
gulp.task('open', ['build'], require('./gulp/tasks/open'));
gulp.task('watch', ['build'], require('./gulp/tasks/watch'));
gulp.task('default', ['unit', 'serve', 'open', 'watch']);

