
var exec = require('child_process').exec,
    gulp  = require('gulp'),
    PATH  = require('./gulp/path'),
    $     = require('gulp-load-plugins')({
                      pattern: ['*'],
                      scope: ['devDependencies']
                    });


require('./gulp/tasks/html-tasks')(gulp, $, PATH);
require('./gulp/tasks/styles-tasks')(gulp, $, PATH);


gulp.task('info', function (){
  console.log("\nPlugins in var $ =", $,"\n");
});

gulp.task('dev', ['html:dev', 'style:dev'],function (){
});
