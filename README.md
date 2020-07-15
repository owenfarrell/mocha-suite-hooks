# mocha-suite-hooks

Sometimes, `before()` isn't enough and `beforeEach()` is too much. For all of those times in between, there's `beforeSuite()`.

### Setup

```sh
npm install --save-dev mocha-suite-hooks
```

Then simply run mocha with `--require mocha-suite-hooks`.

### Examples

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
