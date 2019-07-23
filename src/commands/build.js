const { Command, flags } = require('@oclif/command')
const fs = require('fs-extra')
const Listr = require('listr')
const { src, dest } = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')
const zip = require('gulp-zip')
// const gscan = require('gscan')

// fmlr config
const config = require('../fmlr.config.js')

// Process assets with gulp
function processAssets () {
  return src(config.sass.src)
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(dest(config.sass.dest))
}

// Zip theme for production
function createZip (pkg) {
  return src(['./**/*', '!./assets/sass/**'])
  .pipe(zip(`${pkg.name}-${pkg.version}.zip`))
  .pipe(dest('.'))
}

// Get theme's package.json
function getPkg () {
  fs.readJson('./package.json')
  .then(pkg => {
    return pkg
  })
  .catch(error => this.error(error))
}

class BuildCommand extends Command {
  async run () {
    const pkg = getPkg()

    const tasks = new Listr([
      // Make sure this directory is a Ghost theme
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
        .catch(error => this.error(error))
      },

      // Process assets
      {
        title: 'Processing assets',
        task: () => processAssets()
      },

      // Create a zip file
      {
        title: 'Zipping theme',
        task: () => fs.readJson('./package.json')
        .then(pkg => createZip(pkg))
        .catch(error => this.error(error))
      },

      // Run Gscan
      {
        title: 'Reviewing theme with Gscan',
        task: (ctx, task) => fs.readJson('./package.json')
        .then(pkg => {
          // gscan.checkZip({
          //   path: `${pkg.name}-${pkg.version}.zip`,
          //   name: pkg.name
          // })
          // .catch(error => this.error())
        })
        .catch(error => this.error(error))
      }
    ])

    tasks.run()
    .catch(error => {
      this.error(error)
    })
  }
}

BuildCommand.description = `Prepare your theme for production`

module.exports = BuildCommand
