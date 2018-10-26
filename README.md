# js-project-template
JavaScript Project Template for SPA

## Description

It is not fun to setup the build and testing environment when you want to start
to code for a new project.  This is the very minimum project skelton with
with the building and testing environment set up.  Initially the project does not
depend on any SPA frameworks.  The project imports only lodash and jquery into index.js
to provide the template for importing external libraries.

The project uses Webpack4 to build and Jasmine for browser based testing.
Since this project template is for SPA we manipulate DOM.  That's why the browser
based testing is chosen rather than NodeJS based.

```
- dist
  - index.html     The landing page of SPA
- src
  - index.js       The entry point of JavaScript
- test
  - index.html     Jasmine test suite top page
  - app_spec.js    Jasmine test cases
  - SpecHelper.js  Sets up each test suite with copying all the SPA html elements
                   inside the <div class='markup'>
- package.json     npm configuration file
- package-lock.json    automatically generated npm configuration file
- webpack.config.js    webpack configuration file
- webpack.test.config.js  webpack configuration file for Jasmine test
```

## How to Build

Before you start, invoke `npm install` to install all the modules that the project
depends on.

- `npm run build` will build `dist/main.js`
- `npm run watch` will continuously build `dist/main.js` upon file changes.
- `npm start` will start the webserver and the browser for hot reloading.
  Note that this will build the sources into the meomry and does not write out
  `dist/main.js`.  So when you run the test cases that depends on `dist/main.js`
  you should use `npm run watch` or `npm run build` instead.

Your JS code goes to `src/index.js` which will be bundled and written out to
`dist/main.js`.

`dist/index.html` is the application's page that includes the bundled `dist/main.js`
file.

## How to test

- `npm run test` will start the another webserver and browser for Jasmine test
  framework.

Simply add test cases in `test/app_spec.js`.  On each test suite `SpecHelper.js`
copies the `<div class='markup'>` element from `dist/index.html` into the test
suite page.  So changing DOM outside of each test suite does not change the view.
