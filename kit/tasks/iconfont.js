'use strict';

var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'Iconfont';

gulp.task('iconfont', function(){
  return gulp.src(['img/icons/svg/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'scss/base/_iconfont.scss',
      targetPath: '../../scss/base/_iconfont.scss',
      fontPath: 'fonts/iconfont/'
    })) 
    .pipe(iconfont({
      fontName: fontName, // required
      fontPath: '../../scss/base/_iconfont.scss', 
      className: 'icon',
      prependUnicode: true, // recommended option 
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available 
      timestamp: runTimestamp, // recommended to get consistent builds when watching files 
    }))
    .pipe(gulp.dest('fonts/iconfont/'));
});