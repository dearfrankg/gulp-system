// var gulp  = require("gulp");

// var testFiles = [
//     'build/app.js',
//     'build/assets/bower_components/angular-mocks/angular-mocks.js',
//     'app/**/*Spec.{js,coffee}'
// ];

// gulp.task('unit', ['browserify'], function() {
//   // Be sure to return the stream
//   return gulp.src(testFiles)
//     .pipe(karma({
//       configFile: './test/karma.conf.js',
//       action: 'watch'
//     }))
//     // .on('error', function(err) {
//     //   // Make sure failed tests cause gulp to exit non-zero
//     //   throw err;
//     // });
// });

// // gulp.task('default', function() {
// //   gulp.src(testFiles)
// //     .pipe(karma({
// //       configFile: 'karma.conf.js',
// //       action: 'watch'
// //     }));
// // });
