# Familiar
Accelerated theme development for Ghost.

# Usage
Install the Familiar CLI globally.
```
$ npm install -g familiar-cli
```

Use Ghost CLI to setup a local Ghost server.
```
$ ghost install local
```

Navigate to the themes directory and create a new theme.
```
$ cd <ghost-directory>/content/themes
$ familiar create
```

Start a development server.
```
$ familiar develop
```

# Commands

## Create
Create a new Ghost theme.
```
$ familiar create
```

## Install
Install an existing Ghost theme from GitHub, Gitlab, or Bitbucket.
```
$ familiar install <provider:owner/repo>
```

## Develop
Start a development server.
```
$ familiar develop
```

## Scan
Scan your theme with Gscan.
```
$ familiar scan
```

## Build
Prepare your theme for production
```
$ familiar build
```

Happy theme development!
