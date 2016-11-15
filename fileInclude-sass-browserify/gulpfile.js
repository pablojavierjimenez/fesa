
var exec  = require('child_process').exec,
    gulp  = require('gulp'),
    PATH  = require('./gulp/path'),
    $     = require('gulp-load-plugins')({
                      pattern: ['*'],
                      scope: ['devDependencies']
                    });

$.templateData = require('./gulp/templateData'),
$.templateOptions = require('./gulp/templateOptions');

require('./gulp/tasks/html-handlebar')(gulp, $, PATH);
require('./gulp/tasks/helpers')(gulp, $, PATH);



gulp.task('dev', ['browserSync:dev','watch:html'],function (){
});

gulp.task('dist', ['browserSync:dist', 'hbs:dist'],function (){
});
