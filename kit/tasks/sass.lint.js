'use strict';
 
var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');
 
// SASS DIRECTORY
var scssDir = 'scss/**/*.scss';

gulp.task('sass-lint', function () {
  return gulp.src(scssDir)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});