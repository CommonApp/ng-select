# ng-select

> This is Common App's forked version of [ng-select](https://ng-select.github.io/). It is _heavily_ modified to meet the needs of the CA development team to ensure compatibility and accessibility of the plugin within our products.

[![npm version](https://badge.fury.io/js/%40commonapp%2Fng-select.svg)](https://badge.fury.io/js/%40commonapp%2Fng-select)

It was forked to improve the accessibility of the plugin through proper ARIA roles, improved screen reader support, and increased key command support.

Original and current documentation for ng-select can be found [in the parent repo](https://github.com/ng-select/ng-select).

The CommonApp version is what is used within all CommonApp products via a Github package.

## Contributing

### Run demo page in watch mode

```
npm i
npm run start
```

### Testing

Common App developers are not expected to update unit tests as they have not been maintained alongside changes from the original source. Developers should still test locally and should consider releasing Release Candidate versions before final versions if questions on functionality within our applications exist.

### Releasing a new version

ng-select versioning and release strategy mimics that of Forge: https://cawiki.atlassian.net/wiki/spaces/CA/pages/3217457172/Versioning+and+release+strategy

Release branches should be created and tested against, and should be where bug fixes are made and administrative release tasks like version bumping and changelog updates should occur.

Once a release is ready, an `npm publish` should be run, but only those with permission can do so. Please reach out to Greg or Nick if you encounter any issues.
