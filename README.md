# aurelia-repeat-strategies

Plugin that provides an iterator strategy for the repeater and an object to iterator value converter.

## Installation

Install via JSPM

```javascript
jspm install github:martingust/aurelia-repeat-strategies
```

Load the plugin

```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('martingust/aurelia-repeat-strategies'); // Add this line to load the plugin

  aurelia.start().then(a => a.setRoot());
}
```

## Use the plugin

```javascript
export class App {
  data = {
    "foo": {
      baz: true
    },
    "bar": {
      baz: false
    }
  };
}
```

```html
<template>
  <div repeat.for="[key, value] of data | iterable">
    ${key} ${value.baz}
  </div>
</template>
```

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
