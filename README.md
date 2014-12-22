


# Original implementation from https://github.com/Urge2code/webstack-client


# Vanilla App

This project is an application skeleton for a typical website.
It contains the necessary elements to quickly start new developments, namely :

* AngularJS setup : working controllers, views, directives, factories, filters and services
* Project structure : files organized for easier maintenance and scalability
* Styles setup : Normalize.css, SASS compilation with source maps support, must-have mixins and responsive grid (Zurb Foundation)
* 3rd party dependencies management (Bower)
* Minification, bundling, and other tasks management with development and production modes (Gulp)
* JS errors reporting and code quality inspection (JSHint)
* Unit and end-to-end tests configuration (Karma/Protractor/Mocha/Chai/Sinon/PhantomJS)
* Global error handling and authentication (HTTP interceptors)
* i18n and l10n
* Wiring with a ReST API
* Lightweight development web server with LiveReload support
* ...

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
npm install --development
npm install karma-cli -g
npm install protractor -g
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
the app changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Possible Issues
+ You might have to set a System Variable: GYP_MSVS_VERSION 2013
+ You might have to install Python, Ruby, Sass, ...

### Run the Application

To run the application in development mode, use the `gulp` command
(or the alias `npm start`). Development mode skips the bundling and minification
process for easier debugging, generates SASS source maps, watches for file changes
to retrigger related tasks automatically (such as SASS compilation, for example)
and starts a light development web server configured with [LiveReload][livereload].

The app can then be accessed at `http://localhost:8080`.

### Package the application for deployment

To package the application, use the `gulp package --env` command, where 'env' is
one of the following values : qa, test or prod. So, one of the following :

```
gulp package --qa
gulp package --test
gulp package --prod
```

This will generate a folder related to the desired environment in the package folder,
for example : package/prod. It will contain the 'App' folder, ready to be deployed.

## Directory Layout

    app/                --> all of the files to be used in production
      sass/             --> sass files
        app.scss        --> main stylesheet
      img/              --> image files
      index.tmpl        --> app layout file (the main html template)
      js/               --> javascript files
        app.js          --> application
        controllers     --> application controllers
        directives      --> application directives
        factories       --> custom angular factories
        filters         --> custom angular filters
        services        --> custom angular services
      views/            --> angular views (partial html templates)
        home.html
        about.html

    test/               --> test config and source files
      protractor-conf.js    --> config file for running e2e tests with Protractor
      e2e/                  --> end-to-end specs
        scenarios.js
      karma.conf.js         --> config file for running unit tests with Karma
      unit/                 --> unit level specs/tests
        controllers-spec.js      --> specs for controllers
        directivess-spec.js      --> specs for directives
        filters-spec.js          --> specs for filters
        services-spec.js         --> specs for services


## Testing

There are two kinds of tests in the application: Unit tests and End to End tests.

### Running Unit Tests

The app comes preconfigured with unit tests. These are written in
[Mocha][mocha]/[Chai][chai]/[Sinon][sinon], which are run with the [Karma Test Runner][karma].
A Karma configuration file is provided to run them.

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The app comes with end-to-end tests, written in [Mocha][mocha]/[Chai][chai]/[Sinon][sinon].
These are run with the [Protractor][protractor] End-to-End test runner.

* the configuration is found at `test/protractor-conf.js`
* the end-to-end tests are found in `test/e2e/`

A web server needs to be serving up the application, so that Protractor can interact with it.

```
npm start
```

or

```
gulp
```

In addition, WebDriver needs to be installed since Protractor is built upon it:

```
npm run update-webdriver
```

Then, the end-to-end tests can be run using the following command:

```
npm run protractor
```


## JSHint

Gulp will run [JSHint][jshint] to perform JS inspection and report errors. If there are any, you will
find information about these in `logs/js-hint.txt`

## Updating the application

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page.
You can run this every time you update the version of Angular that you are using.


### Running the App during Development

The app comes preconfigured with a local development webserver. This is because opening html pages via
the `file://` scheme instead of `http://` prevents things like cookies, xhr, etc to function properly.
The server is started automatically by gulp in development mode and can also be started with `npm start`.

Alternatively, you can choose to configure your own webserver, such as nginx. Just
configure your server to serve the files under the `app/` directory.


### Running the App in Production

Run the `gulp` command to perform compilation, minification and bundling of assets.


## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The app
contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

### CloudBees

CloudBees have provided a CI/deployment setup:

<a href="https://grandcentral.cloudbees.com/?CB_clickstart=https://raw.github.com/CloudBees-community/angular-js-clickstart/master/clickstart.json">
<img src="https://d3ko533tu1ozfq.cloudfront.net/clickstart/deployInstantly.png"/></a>

If you run this, you will get a cloned version of this repo to start working on in a private git repo,
along with a CI service (in Jenkins) hosted that will run unit and end to end tests in both Firefox and Chrome.


## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[mocha]: http://visionmedia.github.io/mocha/
[chai]: http://chaijs.com/
[sinon]: http://sinonjs.org/
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
[jshint]: http://www.jshint.com/
[livereload]: http://livereload.com/
