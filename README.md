# js-project-template
JavaScript Project Template for SPA

## Description

It is not a fun thing to setup the environment for a new project.
This project skelton is very minimum in a sense that it only provides
the building and testing environment.  Nothing more.  The project does not even
depend on any SPA frameworks.  Only lodash and jquery are imported into the
main script `index.js`.

The project uses Webpack4 to build and Jasmine for browser based testing.
Since this project template is for SPA in mind that manipulates DOM, we chose
browser based testing.

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
  framework.  This will build the sources into the memory and does not write out
  to `test/test-main.js`.  Use `npm run test-watch` or `npm run build`.
- `npm run test-watch` will continuously build `test/app_apec.js` as the entry
  point and bundles to `test/test-main.js` which is included from `test/index.html`.
- `npm run test-build` will build `test/app_apec.js` as the entry point and writes
  out the bundle to `test/test-main.js`.

Simply add test cases in `test/app_spec.js`.  On each test suite `SpecHelper.js`
copies the `<div class='markup'>` element from `dist/index.html` into the test
suite page.  So changing DOM outside of each test suite does not change the view.

The `test` directory contains symbolic links to `node_modules`, `dist` and `src`
to access modules from the test scripts.
