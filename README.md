# mocha-suite-hooks

Sometimes, `before()` isn't enough and `beforeEach()` is too much. For all of those times in between, there's `beforeSuite()`.

[![npm](https://img.shields.io/npm/v/mocha-suite-hooks.svg)](https://npmjs.org/package/mocha-suite-hooks)
[![npm](https://img.shields.io/npm/dt/mocha-suite-hooks)](https://www.npmjs.com/package/mocha-suite-hooks)
[![npm](https://img.shields.io/npm/l/mocha-suite-hooks)](https://github.com/owenfarrell/mocha-suite-hooks/blob/master/LICENSE)

[![CI Build](https://github.com/owenfarrell/mocha-suite-hooks/workflows/Test/badge.svg)](https://github.com/owenfarrell/mocha-suite-hooks/actions?query=event%3Apush+branch%3Amaster)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=owenfarrell_mocha-suite-hooks&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=mocha-suite-hooks)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/owenfarrell/mocha-suite-hooks.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/owenfarrell/mocha-suite-hooks/alerts/)
[![Known Vulnerabilities](https://snyk.io/test/github/owenfarrell/mocha-suite-hooks/badge.svg)](https://snyk.io/test/github/owenfarrell/mocha-suite-hooks)

### Setup

```sh
npm install --save-dev mocha-suite-hooks
```

Then simply run mocha with `--require mocha-suite-hooks`.

### Examples

#### beforeSuite

The `beforeSuite` method will execute at the beginning of each immediate child suite. The `beforeSuite` method will be invoked before any/all `before` hooks defined within the suite.

```js
describe('Create Article', function() {
  beforeSuite(function() {
      console.log('NAVIGATE TO eCOMMERCE SITE');
      // Automate web browser navigation
  });

  context('When searching for an item by a known name', () => {
    before(function() {
        console.log("SEARCHING BY NAME");
        // Automate web browser navigation
    });

    it('should not fail');
    it('should return some results');
  });

  context('When searching for an item by an unknown SKU', () => {
    before(function() {
        console.log("SEARCHING BY SKU");
        // Automate web browser navigation
    });

    it('should fail');
    it('should not return any results');
  });
});
```

#### afterSuite

The `afterSuite` method will execute at the conclusion of each immediate child suite. The `afterSuite` method will be invoked after any/all `after` hooks defined within the suite.

```js
describe('Create Article', function() {
  afterSuite(function() {
      console.log('CLEAN DB');
      // Delete database record(s)
  });

  context('When Article is valid', () => {
    before(function() {
        console.log("INSERTING VALID ARTICLE");
        // Insert database record(s)
    });

    it('should not fail');
    it('should have some properties');
    it('should send an email');
  });

  context('When Article is not valid', () => {
    before(function() {
        console.log("INSERTING NOT VALID ARTICLE")
        // Insert database record(s)
    });

    it('should fail');
    it('should not send an email');
  });
});
```
