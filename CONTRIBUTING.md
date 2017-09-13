# Contribution guide

## Contributing
1. Fork, then clone: `git clone https://github.com/YOUR_USERNAME/insidesales-components.git`
2. Create a branch with a meaningful name describing the feature/issue
3. Make your changes and commit: `git add` and `git commit`
4. Make sure that the test are passing: `npm test`
5. Push your branch: `git push -u origin you-branch-name`
6. Submit a pull request to the upstream insidesales-components repository
7. Use a descriptive title and describe your changes briefly
8. Wait for a maintainer to review your PR, make any changes recommended, and get it merged
10. Celebrate your successful contribution! 🙌🏼

## Creating releases

insidesales-components uses [semantic-release](https://github.com/semantic-release/semantic-release)
to release new versions automatically.

To help with creating commit messages, you can install the [commitizen](https://github.com/commitizen/cz-cli) command line tools. Once you have the command line tool installed, you can commit your staged changes by running `npm run commit`. This command will trigger the commitizen cli and walk you through creating your commit message for staged changes. Here are a couple of tutorials you can use to check out how this works:

[https://egghead.io/lessons/javascript-writing-conventional-commits-with-commitizen](https://egghead.io/lessons/javascript-writing-conventional-commits-with-commitizen)
[https://egghead.io/lessons/javascript-committing-a-new-feature-with-commitizen](https://egghead.io/lessons/javascript-committing-a-new-feature-with-commitizen)

If you choose not to use commitizen, please follow the [semantic-release commit message format](https://github.com/semantic-release/semantic-release#default-commit-message-format) so releases will trigger properly.

**Use the following types accordingly:**

*  Commits of type `fix` will trigger bugfix releases, think `0.0.1`
*  Commits of type `feat` will trigger feature releases, think `0.1.0`
*  Commits with `BREAKING CHANGE` in body or footer will trigger breaking releases, think `1.0.0`

All other commit types will trigger no new release.