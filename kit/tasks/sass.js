'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

// SASS DIRECTORY
var scssDir = 'scss/**/*.scss';
// CSS DIRECTORY
var cssDir = 'css';

// COMPILE SASS
gulp.task('sass', function() {
    return gulp.src(scssDir)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ["> 1%", "last 2 versions", "ie 10"],
            cascade: false
        }))
        .pipe(cleanCSS({
            debug: true
        }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(cssDir));
});