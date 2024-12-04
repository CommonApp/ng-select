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

#### Follow the steps below to release a new verson:

1. Create a release branch.

```
git checkout -b <release-branch>
```

2. Perform safety checks.
Ensure your local environment is in sync with the main branch:

```
git pull origin main
git status
npm ci
```

3. Update the version.
Choose the appropriate versioning strategy:

Pre-release

```
npm version [premajor|preminor|prepatch] --preid=rc
```

Full release

```
npm version [major|minor|patch]
```

4. Update the CHANGELOG
Manually update the `CHANGELOG.md` file to include recent changes.

5. Merge the release branch into master

6. Create an annotated git tag
Create a version-specific git tag: 
```
git tag -a <version> -m "Release v<version>"
```

7. Push branch changes and tags
Push all changes and the new tag to the remote repository:

```
git push --tags
```

8. Create a GitHub release
Using GitHub’s UI:
    1. Navigate to Releases > Tags.
    2. Select the newly created tag.
    3. Choose Create release from tag.
    4. Fill in the release title with the version number.
    5. Include the updated changelog as the release body.
    6. If this is a pre-release (e.g., alpha or beta), check the Pre-release option before creating the release. 

9. Build and publish the release
    1. On the master branch
      ```
      npm run build
      ```
    2. Navigate to the dist/ng-select directory
      ```
      cd ./dist/ng-select
      ``` 
    3. Publish the package
      ```
      npm publish
    ```

10. After a successful release, create a PR to merge the master branch into develop.
