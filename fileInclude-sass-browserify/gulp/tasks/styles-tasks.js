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
      $.autoprefixerCore({browser: ['lost 2 version']})
    ],
    /**
     * [distProsessors description]
     * @type {Array}
     */
    dist:[
      $.autoprefixerCore({browser: ['lost 2 version']}),
      $.csswring
    ]
  };

  gulp.task('style:dev', function(){
    return gulp.src(PATH.src.styles)
    .pipe($.sass())
    .pipe($.postcss(PROSESS.dev))
    .pipe(gulp.dest(PATH.dest.styles))
  });

  gulp.task('style:dist', function(){
    return gulp.src(PATH.src.styles)
    .pipe($.postcss(PROSESS.dist))
    .pipe(gulp.dest(PATH.dist.styles))
  });

  gulp.task('watch:style', function (){
    gulp.watch(PATH.src.styles, ['style:dev']);
  });

};
