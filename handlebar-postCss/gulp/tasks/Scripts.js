//*******************
//*  Scripts Tasks  *
//*******************

module.exports = function (gulp, $, PATH) {

  gulp.task('script:dev', function(){
    return $.browserify({
      entries: [PATH.src.scriptsMain],
      insertGlobals: true,
      debug: true
    })
    .on('error', function(error) {
      console.log(error.message);
    })
    .transform($.babelify)
    .bundle()
    .pipe($.vinylSourceStream("app.js"))
    .pipe(gulp.dest(PATH.dest.app));
  })

  .task('script:dist', function(){
    return gulp.src(PATH.src.scriptsMain)
    .pipe($.rename('app.min.js'))
    .pipe(gulp.dest(PATH.dist.app))
  })

  .task('watch:script', ['script:dev'], function (){
    gulp.watch(
      PATH.src.scripts,
      [
        'script:dev',
        $.browserSync.reload({
          stream: true
        })
      ]
    );
  });

  gulp.task("build", function(){
    return $.browserify({
        entries: [PATH.src.scriptsMain]
    })
    .transform($.babelify)
    .bundle()
    .pipe($.vinylSourceStream("app.js"))
    .pipe(gulp.dest(PATH.dest.app));
  });
};
