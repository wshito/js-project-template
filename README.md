# js-project-template
JavaScript Project Template for SPA

## Description

Very minimum project skelton with minimum dependencies.  Initially the project
imports lodash and jquery into index.js.

Simply invoke `npm install` to install all the modules that the project depends on.

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

- `npm run build` will build `dist/main.js`
- `npm run watch` will continuously build `dist/main.js` upon file changes.
- `npm start` will start the webserver and the browser for hot reloading.
  Note that this will build the sources into the meomry and does not write out
  `dist/main.js`.  So when you run the test cases that depends on `dist/main.js`
  you should use `npm run watch` or `npm run build` instead.


## How to test

- `npm run test` will start the another webserver and browser for Jasmine test
  framework.
