const { Command, flags } = require('@oclif/command')
const bs = require('browser-sync').create()
const chokidar = require('chokidar')
const fs = require('fs-extra')
const Listr = require('listr')
const { src, dest } = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')

// fmlr config
const config = require('../fmlr.config.js')

// Process assets with gulp
function processAssets () {
  return src(config.sass.src)
  .pipe(sass(config.sass.options).on('error', sass.logError))
  .pipe(postcss([ autoprefixer() ]))
  .pipe(dest(config.sass.dest))
  .pipe(bs.stream())
}

// Watch theme files for changes
function watchFiles () {
  chokidar.watch(config.sass.src)
  .on('change', path => processAssets())

  chokidar.watch(config.hbs.path)
  .on('change', path => bs.reload())
}

class DevelopCommand extends Command {
  async run () {
    const tasks = new Listr([
      // Make sure this is a Ghost theme
      {
        title: 'Checking theme',
        task: (ctx, task) => fs.readJson('./package.json')
        .then(pkg => {
          if (pkg.engines.ghost) {
            task.title = `Found ${pkg.name} ${pkg.version}`
          } else {
            this.error('No Ghost theme found')
          }
        })
        .catch(error => {
          this.error(error)
        })
      },
      // Process assets
      {
        title: 'Processing assets',
        task: () => processAssets()
      },
      // Start BrowserSync
      {
        title: 'Starting BrowserSync',
        task: () => bs.init(config.browsersync.options)
      },
      // Watch theme files
      {
        title: 'Watching theme files',
        task: () => watchFiles()
      }
    ])

    tasks.run()
    .catch(error => {
      this.error(error)
    })
  }
}

DevelopCommand.description = `Start a development server`

module.exports = DevelopCommand
