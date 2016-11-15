var path = {
  "host": {
    "app"     : "./app",
    "temp"    : "./.temp",
    "public"  : "./public",
    "dist"    : "./dist"
  },

  "src": {
    "host"          : "./app",
    "index"         : "./app/templates/main.hbs",
    "styles"        : "./app/styles/**/*.css",
    "stylesMain"    : "./app/styles/main.css",
    "scripts"       : "./app/scripts/**/*.js",
    "scriptsMain"   : "./app/scripts/main.js",
    "fonts"         : "./bower_components/font-awesome/fonts/**/*.*",
    "img"           : "./app/img/**/*.+(png|jpg|gif|svg)",
    "template"      : "./app/templates/**/*.hbs",
    "templateData"  : "./app/templates/data"
  },

  "dest": {
    "host"    : "./public",
    "app"     : "./public/js",
    "styles"  : "./public/css/",
    "img"     : "./public/img/",
    "fonts"   : "./public/fonts/"
  },

  "dist": {
    "host"    : "./dist",
    "app"     : "./dist/js",
    "styles"  : "./dist/css/",
    "img"     : "./dist/img/",
    "fonts"   : "./dist/fonts/"
  },

  "bower": {
    "host": "bower_components"
  }
};

module.exports = path;
