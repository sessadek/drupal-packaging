'use strict';

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

// GENERATE SPRITE IMAGE
gulp.task('sprite', function() {
    gulp.src('img/icons/*')
        .pipe(gulp.dest('img/icons/'));
    var spriteData = gulp.src('img/icons/*.png').pipe(spritesmith({
        imgName: '../img/sprite.png',
        cssName: '_sprite.scss',
        algorithm: 'top-down',
        padding: 15
    }));

    spriteData.img.pipe(gulp.dest('./img/')); // output path for the sprite
    spriteData.css.pipe(gulp.dest('./scss/base/')); // output path for the CSS
});