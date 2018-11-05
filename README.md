# fmlr
> Accelerated theme development for Ghost. Pronounced "Familiar".

# Usage
Install fmlr globally.
```
$ npm install -g fmlr
```

Use Ghost CLI to setup a local Ghost server.
```
$ ghost install local
```

Navigate to the themes directory and create a new theme.
```
$ cd <ghost-directory>/content/themes
$ fmlr create
```

Run fmlr's development server and start editing your theme right away.
```
$ fmlr develop
```

# Commands

## Create
Create a new Ghost theme, including base template files and a prefilled package.json.
```
$ fmlr create
```

## Develop
Start a live development server. fmlr will watch your theme for updates, process assets on the fly, and reload browsers automatically.
```
$ fmlr develop
```

## Build
Build a production version of your theme.
```
$ fmlr build
```

## Scan
Scan your theme with Gscan.
```
$ fmlr scan
```

Happy theme development!
