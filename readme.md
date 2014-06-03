gulp-boiler
===========

Each time I create these files from scratch or copy them from other projects,
so here it is, the minimal complete boilerplate app powered by gulp.

Livereload included via gulp-connect and gulp-watch (the simple variant).

requirements
------------

  * [node.js](http://nodejs.org)
  * ```npm install -g gulp```

how to use
----------

Run the following commands:

    $ git clone https://github.com/j-hannes/gulp-boiler
    $ mv gulp-boiler my-awesome-app
    $ cd my-awesome-app
    $ rm -rf .git
    $ echo "" > readme.md
    $ npm init
    $ npm install

(somebody should write a script for that...) To start developing, run

    $ gulp

and in another terminal window

    $ atom .
    $ open http://localhost:8080


re-initialize git
-----------------

If git is used (what it always should be), run:

    $ git init
    $ git add .
    $ git commit -v

Add a new remote location with
    
    $ git remote add origin git@github.com:my-git-username/my-new-app-name
