'use strict';

var gulp = require('gulp');
var psi = require('psi');

// SITE URL
var site = 'http://';
// KEY
var key = '';


gulp.task('desktop', function() {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(function(data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
});