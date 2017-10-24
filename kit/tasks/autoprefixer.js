'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// AUTOPREFIXER
gulp.task('autoprefixer', function() {
    return gulp.src([
        'css/style.css',
        'css/home.css'
        ])
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
});