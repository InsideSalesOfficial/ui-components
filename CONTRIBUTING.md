# Contribution guide

## Contributing
1. Fork, then clone: `git clone https://github.com/YOUR_USERNAME/insidesales-components.git`
2. Create a branch with a meaningful name describing the feature/issue
3. Make your changes and commit: `git add` and `git commit`
4. Make sure that the test are passing: `npm test`
5. Push your branch: `git push -u origin you-branch-name`
6. Submit a pull request to the upstream insidesales-components repository
7. Use a descriptive title and describe your changes briefly
8. Wait for a maintainer to review your PR, make any changes recommended, and get it merged (please follow the instructions below for merging your changes)
10. Celebrate your successful contribution! 🙌🏼

## Semantic Versioning

insidesales-components follows [semantic versioning](http://semver.org/). We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes.

## Creating releases

insidesales-components uses [semantic-release](https://github.com/semantic-release/semantic-release) to release new versions automatically. You can create an automatically release merge with one of the following options:

###Option #1 - Submit a pull request under 1 commit and merge via a merge commit.

Develop in whatever style you like, but only end up with one commit in the end before putting up your pull request. Some people make a ton of changes and literally only commit once, others commit a lot with simple commit messages, then rebase and squash their commits at the end. It doesn't really matter what you do, so long as you end up with one properly formatted commit to merge with. If you choose this approach, you can use the handy commit tools built into the repo.

To help with creating commit messages, you can install the [commitizen](https://github.com/commitizen/cz-cli) command line tools. Once you have the command line tool installed, you can commit your staged changes by running `npm run commit`. This command will trigger the commitizen cli and walk you through creating your commit message for staged changes. Here are a couple of tutorials you can use to check out how this works:

[https://egghead.io/lessons/javascript-writing-conventional-commits-with-commitizen](https://egghead.io/lessons/javascript-writing-conventional-commits-with-commitizen)
[https://egghead.io/lessons/javascript-committing-a-new-feature-with-commitizen](https://egghead.io/lessons/javascript-committing-a-new-feature-with-commitizen)

If you choose not to use commitizen, please follow the [semantic-release commit message format](https://github.com/semantic-release/semantic-release#default-commit-message-format) so releases will trigger properly.

###Option #2 - Submit a pull request with however many commits you want in any format, but merge via squash merge.

This is likely the easiest option, but you're going to have to write out your commit message and description by hand. If you mess it up, nothing bad happens, but the package may not deploy automatically, or it will deploy but may ship with undesired versioning. In the case of a botched merge, we'll just have to fix and publish the package manually 😥.


###Use the following types accordingly when creating a commit message:

*  Commits of type `fix` will trigger bugfix releases, think `0.0.1`

	**Example Title:**

	`fix(ComponentName): Some short description of the change.`

*  Commits of type `feat` will trigger feature releases, think `0.1.0`
	
	**Example Title:**
	
	`feat(ComponentName): Some short description of the change.`

*  Commits with `BREAKING CHANGE` in body or footer will trigger breaking releases, think `1.0.0`

	**Example Title:**

	`fix(ComponentName): Some short description of the change.`
	
	**Example Description:**
		
	`BREAKING CHANGE: Some message about what's breaking.`

* All other commit types will trigger no new release.

	**Example Title:**
	
	`doc(partOfTheDoc): Making some documentation changes`
	`style(Component)`: Fix indentation in Component`

	etc...
	
## Code Conventions

* Use semi-colons `;`
* 2 spaces for indentation (no tabs)
* Prefer `'` over `"`
* Write “attractive” code

## License
By contributing to InsideSales Components, you agree that your contributions will be licensed under its MIT license.