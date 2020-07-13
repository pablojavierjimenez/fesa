Front End Start Application
===========================
- [Installation](#installation)
- [How Run This Project](#How-Run-This-Project)
- [Develoment Tacks](#develoment-tacks)
  - [Run server](#run-server)
  - [Build](#build)
- [Design](#design)
- [Technology Stack](#technology-stack)
  - [NPM Dev dependencies](#npm-dev-dependencies)
  - [Naming & Selectors](#naming-&-selectors)
-----





Installation
------------

- Prerequisites (see _[Technology Stack](#technology-stack)_):

    * [NodeJS with npm](https://nodejs.org/en/)
    * [Install NVM](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) link al repositorio de [NVM en Github](https://github.com/nvm-sh/nvm#installing-and-updating)
    * [Gulp](https://www.npmjs.com/package/gulp-4.0.build)
    * [Yarn](https://www.npmjs.com/package/yarn) also see [this article](https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm)
    * on Windows machines maybe requires [Visual Studio 2013 WD](https://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-desktop)

- Install Project:
    ```bash
    cd ~/Proyects
    git clone git@github.com:pablojavierjimenez/fesa.git
    cd fesa
    git checkout develop
    yarn
    ```
----

How Run This Project
--------------------
```bash
# if you already have this nvm node version installed keep this command
:~$ nvm install v8.17.0
# switch node vercion  
:~$ nvm use v8.17.0
# to run project
:~$ cd fileInclude-sass-browserify
:~$ gulp dev
```
Technology Stack
---------------
- [node](https://nodejs.org/en/ "node")
- [NPM](http://npmjs.org "NPM")
- [gulp](http://gulpjs.com "gulp")
- [yarn](https://yarnpkg.com/en/docs/usage "gulp")
- [Sass](http://sass-lang.com "Sass")
- Prerequisites:
    if you still instaled gulp globaly first run this command

    ```
    $ npm rm -g gulp
    ```
    then:
    ```
    $ npm install -g gulp-cli
    ```
    ```
    $ npm install -g yarn
    ```
#### NPM Dev dependencies
- [gulp](https://www.npmjs.com/package/gulp-4.0.build)
- [del](https://www.npmjs.com/package/del)
- [browser-sync](https://www.npmjs.com/package/browser-sync)
- [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)
- [gulp-compile-handlebars](https://www.npmjs.com/package/gulp-compile-handlebarss)
- [gulp-html-replace](https://www.npmjs.com/package/gulp-html-replace)
- [gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)














------------
- [run-sequence](https://www.npmjs.com/package/run-sequence)
- [gulp-browserify](https://www.npmjs.com/package/browserify)
- [gulp-cache](https://www.npmjs.com/package/gulp-cache)
- [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
- [gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
- [gulp-if](https://www.npmjs.com/package/gulp-if)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [gulp-less](https://www.npmjs.com/package/gulp-less)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-useref](https://www.npmjs.com/package/gulp-useref)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
------------








npm package.json
```json
{
  "name": "post-css",
  "version": "0.0.1",
  "description": "crear un stack para comenzar cualuier proyecto",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "pablo javier jimenez",
  "license": "MIT",
  "devDependencies": {
    "autoprefixer-core": "^6.0.1",
    "cssnext": "^1.8.4",
    "csswring": "^5.1.0",
    "gulp": "^3.9.1",
    "gulp-file-include": "^0.13.7",
    "gulp-html-replace": "^1.6.1",
    "gulp-load-plugins": "^1.2.4",
    "gulp-minify-html": "^1.0.6",
    "gulp-postcss": "^6.1.1",
    "gulp-sass": "^2.3.2",
    "lost": "^7.0.1",
    "precss": "^1.4.0",
    "rucksack-css": "^0.8.6"
  }
}
```
