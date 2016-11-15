  // Optimization Tasks

    /*
     * IMAGES
     */
    gulp.task('images', function() {
      return gulp.src(PATH.src.img)
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
          progressive: true,
          interlaced: true,
          // don't remove IDs from SVGs, they are often used
          // as hooks for embedding and styling
          svgoPlugins: [{
            cleanupIDs: false
          }]
        })))
        .pipe(gulp.dest(PATH.dest.img))
    })

    /*
     * FONTS
     */
    .task('fonts', function() {
      return gulp.src(PATH.src.fonts)
        .pipe(gulp.dest(PATH.dest.fonts))
    })

    /*
     * ASSETS
     */
    .task('assets', function() {
      return gulp.src([
        'app/*.+(ico|txt|png)',
        '!app/*.html'
      ], {
        dot: true
      }).pipe(gulp.dest(PATH.dest.host));
    })
  // -----------------




    /*
     * JS LINT
     *
    .task('lint', function() {
      return gulp.src(PATH.src.scripts)
        .pipe(JS_hint())
        .pipe(JS_hint.reporter('default'));
    })

    /*
     * VENDORS
     *
    .task('vendors',  function() {
      return gulp.src(PATH.src.libs)
        .pipe(gulp.dest(PATH.dest.libs));
    })

    /*
     * HTML MINIFY
     *
    .task('minify:html', function() {
      return gulp.src([PATH.src.html])
        .pipe(HTML_include({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(HTML_minify({
          collapseWhitespace: true
        }))
        .pipe(gulp.dest(PATH.dist.host))
    })

    /*
     * CSS MINIFY
     *
    .task('minify:css', function() {
      return gulp.src(PATH.src.styles)
        .pipe(CSS_minify())
        .pipe(gulp.dest('dist/css'))
    })*/
