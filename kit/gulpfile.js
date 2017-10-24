'use strict';

var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var concat = require('gulp-concat');

var requireDir = require('require-dir');
requireDir('./tasks');

// SASS DIRECTORY
var scssDir = 'scss/**/*.scss';

// gulp.task('default', ['mobile']);

// WATCH
gulp.task('watch', function() {
    gulp.watch(scssDir, ['sprite', 'sass']);
});

gulp.task('default', ['watch']);