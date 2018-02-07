# shim-js-blank
Blank shim project with instructions on setting up dev environment for JavaScript.

## Initialize and install tools
Create a project directory and cd into it.<br/>
```
$ mkdir awesome-module && cd $_
```

Initialize Node.js<br/>
```
$ npm init --yes
```

Create index.js as well as module and test folders.<br/>
```
$ mkdir lib test
$ touch index.js lib/meaningOfLife.js test/index.test.js test/meaningOfLife.test.js
```

Initialize GIT repository and create initial commit
```
$ git init
$ git add -A; git commit -am "Initial commit"
```

Install tools
* ava: Test framework.
* chokidar-cli: watches source files as they are changed.
* jshint: JavaScript Code Quality Tool.
* precommit-hook: Auto runs npm scripts.
```
$ npm i --save-dev ava chokidar-cli jshint precommit-hook
```
## Configure
Open package.json and add scripts from samples/package.json.

Use samples/.jshintrc as a base for [JSHint configuration](http://jshint.com/docs/).

## References
1. [Setting up a Minimal, Yet Useful JavaScript Dev Environment](https://dev.to/corgibytes/setting-up-a-minimal-yet-useful-javascript-dev-environment)
