'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

// IMAGES OPTIMIZATIONS
gulp.task('imgmin', function() {
    gulp.src('img/sprites/*')
        .pipe(imagemin({
        	interlaced: true,
		    progressive: true,
		    optimizationLevel: 5,
		    svgoPlugins: [{removeViewBox: true}]
        }))
        .pipe(gulp.dest('img/sprites'));
});
