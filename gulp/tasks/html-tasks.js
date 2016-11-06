//******************
//*   html Tasks   *
//******************

module.exports = function(gulp, $, PATH){

  gulp.task('html:dev', function(){
    return gulp.src(PATH.src.index)
    .pipe($.fileInclude({
      prefix: '@@',
      basepath: '@file',
      indent: true
    }))
    .pipe(gulp.dest(PATH.dest.host));
  })

  .task('html:dist', function(){
    return gulp.src(PATH.src.index)
    .pipe($.htmlReplace({
      'css': 'css/styles.min.css',
      'js': 'js/bundle.min.js'
    }))
    .pipe($.fileInclude({
      prefix: '@@',
      basepath: '@file',
      indent: true
    }))
    .pipe($.minifyHtml({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(PATH.dist.host));
  })

  .task('watch:html',function (){
    gulp.watch(PATH.src.template, ['html:dev']);
  });

};
