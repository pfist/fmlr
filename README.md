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

Navigate to the themes directory and start a new theme.
```
$ cd <ghost-directory>/content/themes
$ fmlr new <name>
```

Start up a live development server and get going right away.
```
$ fmlr dev
```

# Commands

## New
Start a new Ghost theme.
```
$ fmlr new <name> [theme]
```
- **name (required)** - The name of your theme. Also used to name the directory where your theme lives.
- **theme (optional)** - URL or shorthand pointing to an alternate starter theme. Supports GitHub, Gitlab, and Bitbucket. See the docs for [download-git-repo](https://github.com/flipxfx/download-git-repo) for URL formatting.

## Dev
Start a live development server. Familiar will watch your theme for updates, process assets on the fly, and reload browsers automatically.
```
$ fmlr dev
```

## Scan
Scan your theme with Gscan. Disabled for now.
```
$ fmlr scan
```

## Build
Build a production version of your theme.
```
$ fmlr build
```

Have fun making Ghost themes! ♥
