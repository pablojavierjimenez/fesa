//******************
//*  Styles Tasks  *
//******************

module.exports = function(gulp, $, PATH){

  var PROSESS = {
    /**
     * [devProsessors description]
     * @type {Array}
     */
    dev: [
      $.precss,
      $.cssnano({
        autoprefixer:{
          add: true,
          browsers: ['last 3 version']
        },
        core: false
      })
    ],
    /**
     * [distProsessors description]
     * @type {Array}
     */
    dist:[
      $.precss,
      $.cssnano({
        autoprefixer:{
          add: true,
          browsers: ['last 3 version']
        },
        core: true
      }),
      $.stylelint
    ]
  };

  gulp.task('style:dev', function(){
    return gulp.src(PATH.src.stylesMain)
    .pipe($.postcss(PROSESS.dev))
    .pipe($.rename('app.css'))
    .pipe(gulp.dest(PATH.dest.styles))
  })

  .task('style:dist', function(){
    return gulp.src(PATH.src.stylesMain)
    .pipe($.postcss(PROSESS.dist))
    .pipe(gulp.dest(PATH.dist.styles))
  })

  .task('watch:style', ['style:dev'], function (){
    gulp.watch(
      PATH.src.styles,
      [
        'style:dev',
        $.browserSync.reload
      ]
    );
  });

};
