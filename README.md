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


Installation
------------

- Prerequisites (see _[Technology Stack](#technology-stack)_):

    * [NodeJS with npm](https://nodejs.org/en/)
    * [Install NVM](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) link al repositorio de [NVM en Github](https://github.com/nvm-sh/nvm#installing-and-updating)
    * [Gulp](https://www.npmjs.com/package/gulp)
    * [Yarn](https://www.npmjs.com/package/yarn) also see [this article](https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm)
    * on Windows machines maybe requires [Visual Studio 2013 WD](https://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-desktop)

- Install:
    ```bash
    cd ~/Proyects
    git clone git@github.com:pablojavierjimenez/fesa.git
    cd fesa
    git checkout develop
    yarn
    ```

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


----

Technology Stack
---------------
```
$ npm install -g gulp
```
```
$ npm install -g yarn
```









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
