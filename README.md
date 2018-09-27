# Familiar
A starting point for Ghost themes with a few goodies to make your life easier.

# Usage
Use ghost-cli to setup a local Ghost server.
```
$ ghost install local
```

Navigate to the themes directory and clone Familiar.
```
$ cd <ghost-directory>/content/themes
$ git clone https://github.com/polymoon/familiar
```

Install Familiar's dependencies.
```
$ npm install
```

Now you can run one of Familiar's commands:
- **npm run develop** - Compile Sass, run PostCSS, and start a development server that automatically reloads when changes to Sass or Handlebars files are detected. Note: Each time you add a new file to your theme, Ghost must be restarted in order to detect them.
- **npm run pack** - Pack your theme for production in a ZIP archive and scan it for errors and feature compatibility using Gscan.
- **npm run scan** - Scan your theme without packing a ZIP archive.

Happy theme development!
