var browserify   = require('browserify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('browserify', ['html2js'], function(){
	return browserify({
			entries: ['./app/modules/main.coffee'],
			extensions: ['.coffee', '.hbs']
		})
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/'));
});
