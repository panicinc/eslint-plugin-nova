# Tests

In lieu of a full test suite, this project contains a **Tests.novaextension** bundle that executes a small collection of assertions.

## Usage

1. Open this repository in Nova
1. Open the **Extension Console**
1. Activate the project as an extension

### Results

If any assertion has failed, it will be logged and the tests will halt:

```
Assertion Failed: environments.nova.globals.Color is readonly
```

If all tests are passing, the following should be logged:

```
OK
```

## Notes

Because `require` caches the contents of any external script or module, you'll need to re-activate the workspace in order for changes to `eslint-plugin-nova.js` to be reflected.
