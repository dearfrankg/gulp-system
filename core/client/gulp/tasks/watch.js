var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', ['build'], function() {
	var server = livereload();

	var reload = function(file) {
		server.changed(file.path);
	};

    gulp.watch(['app/**/*.{js,coffee,html}', '!app/**/*Spec.{js,coffee}'], ['browserify']);
    gulp.watch('app/index.html', ['copy']);
	gulp.watch('app/**/*.scss', ['scss']);
	gulp.watch('app/assets/img/**', ['images']);
    gulp.watch(['build/**']).on('change', reload);
});



