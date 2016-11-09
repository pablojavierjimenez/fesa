//********************//
//*   HELPER Tasks   *//
//********************//

module.exports = function(gulp, $, PATH){

  /*-----------------
   * INFO
   */
  gulp.task('info', function (){
    console.log("\nPlugins in variable $ are: \n", $,"\n");
  })

  /*-----------------
   * CLEANdf
   */
  .task('clean', function(cb) {
    $.del([PATH.dist.host]);
    $.del([PATH.dest.host]);
    return $.cache.clearAll(cb);
  })

  .task('clean:dist', function(cb) {
    $.del(['./dist/**/*', '!dist/im)g', '!dist/img/**/*'], cb)
  })

  .task('clean:dev', function(cb) {
    $.del([PATH.dest.host], cb)
  })

  /*-----------------
   * BROWSER-SYNC
   */
  .task('browserSync:dev', function() {
    $.browserSync({
      port: 7000,
      server: {
        baseDir: [PATH.dest.host],
        routes: {
          "/bower_components": "bower_components"
        }
      }
    })
  })

  .task('browserSync:dist', function(cb) {
    $.browserSync({
      notify: false,
      port: 7000,
      server: {
        baseDir: [PATH.dist.host]
      }
    });
  })

  /*-----------------
   * BOWER INSTALLER
   */
  .task("bower", function(cb){
    if (!fileSistem.existsSync(PATH.bower.host)) {
      console.log('instaling bower components...\n');
      function show(error, stdout, stderr) { console.log(error, stdout) }
      $.exec("bower install", show);
    } else {
      console.log('bower components are installed\n');
    }
  });
};
