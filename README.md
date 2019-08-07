# Familiar
A theme development companion for Ghost.

# Usage
Install Familiar globally.
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

## New
Start a new Ghost theme.
```
$ fmlr new <name> [theme]
```

## Dev
Start a live development server. fmlr will watch your theme for updates, process assets on the fly, and reload browsers automatically.
```
$ fmlr dev
```

## Scan
Scan your theme with Gscan.
```
$ fmlr scan
```

## Build
Build a production version of your theme.
```
$ fmlr build
```

Have fun making Ghost themes! ♥
