//*****************//
//*   HBS Tasks   *//
//*****************//

module.exports = function(gulp, $, PATH){

  gulp.task('hbs:dev', function(){
    return gulp.src(PATH.src.index)
    .pipe($.compileHandlebars(
      $.templateData,
      $.templateOptions
    ))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest(PATH.dest.host));
  })

  .task('hbs:dist', function(){
    return gulp.src(PATH.src.index)
    .pipe($.htmlReplace({
      'css': 'css/styles.min.css',
      'js': 'js/bundle.min.js'
    }))
    .pipe($.compileHandlebars(
      $.templateData,
      $.templateOptions
    ))
    .pipe($.minifyHtml({
      collapseWhitespace: true
    }))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest(PATH.dist.host));
  })

  .task('watch:html',function (){
    gulp.watch(
      PATH.src.template,
      [
        'hbs:dev',
        $.browserSync.reload
      ]
    );
  });
};
