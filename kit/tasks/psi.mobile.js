'use strict';

var gulp = require('gulp');
var psi = require('psi');

// SITE URL
var site = 'http://';
// KEY
var key = '';

gulp.task('mobile', function() {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(function(data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
});