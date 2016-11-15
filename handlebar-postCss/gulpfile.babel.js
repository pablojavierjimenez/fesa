'use strict';

import gulp         from 'gulp';
import gulpPlugins  from 'gulp-load-plugins';
import process      from 'child_process';
import fileSistem   from 'fs';
import PATH         from './gulp/path';
import templateData from './gulp/templateData';
import tasksHelpers from './gulp/tasks/helpers';
import tasksHtml    from './gulp/tasks/Html';
import tasksStyles  from './gulp/tasks/Styles';
import tasksScripts from './gulp/tasks/Scripts';

const $ = gulpPlugins({
        pattern: ['*'],
        scope: ['devDependencies']
      });

$.exec  = process.exec,
$.fileSistem  = fileSistem,
$.templateData = templateData;


/*-----------------
 * TASKS
 *-----------------*/
tasksHelpers(gulp, $, PATH);
tasksHtml(gulp, $, PATH);
tasksStyles(gulp, $, PATH);
tasksScripts(gulp, $, PATH);


gulp.task('dev', [
  'browserSync:dev',
  'watch:html',
  'watch:style',
  'watch:script'
]);

gulp.task('dist', [
  'browserSync:dist',
  'hbs:dist',
  'style:dist'
]);
