//********************//
//*   HELPER Tasks   *//
//********************//

module.exports = function(gulp, $, PATH){


  /*-----------------
   * INFO
   */
  gulp.task('info', function (){
    console.log("\nPlugins in var $ =", $,"\n");
  })

  /*-----------------
   * CLEAN
   */
  .task('clean', function(callback) {
    $.del([PATH.dist.host]);
    $.del([PATH.dest.host]);
    return $.cache.clearAll(callback);
  })

  .task('clean:dist', function(callback) {
    $.del(['./dist/**/*', '!dist/im)g', '!dist/img/**/*'], callback)
  })

  .task('clean:dev', function(callback) {
    $.del([PATH.dest.host], callback)
  })

  /*-----------------
   * BROWSE SYNC
   */
  .task('browserSync:dev', function() {
    $.browserSync({
      port: 7000,
      server: {
        baseDir: [PATH.dest.host],
      }
    })
  })

  .task('browserSync:dist', function(callback) {
    $.browserSync({
      notify: false,
      port: 7000,
      server: {
        baseDir: [PATH.dist.host]
      }
    });
  });
};
