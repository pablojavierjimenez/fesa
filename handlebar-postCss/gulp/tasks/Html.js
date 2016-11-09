//*****************//
//*   HBS Tasks   *//
//*****************//

module.exports = function(gulp, $, PATH){

  /*-----------------*
   * handlebar CONFIG
   *-----------------*/
  $.templateOptions = {
    ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
    partials : {
      footer : '<footer>the end</footer>'
    },
    batch : ['./app/templates/partials'],
    helpers : {
      capitals : function(str){
        return str.toUpperCase();
      }
    }
  };


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

  .task('watch:html', ['hbs:dev'], function (){
    gulp.watch(
      './app/templates/**/*.*',
      [
        'hbs:dev',
        $.browserSync.reload
      ]
    );
  });
};
