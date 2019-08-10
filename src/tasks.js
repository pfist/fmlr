const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync').create()
const config = require('./config')
const { cli } = require('cli-ux')
const { src, dest, series, watch } = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')

// Process assets
function processAssets () {
  // cli.action.start('Processing assets')

  return src('./assets/sass/**/*.scss')
    .pipe(sass(config.options.sass).on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(dest('./assets/css'))
    .pipe(browserSync.stream())
    // .on('end', () => { cli.action.stop() }) 
}

// Start live development server
function startServer (cb) {
  cli.action.start('Starting development server')

  browserSync.init(config.options.browserSync)
  browserSync.emitter.on('init', () => { 
    cli.action.stop()

    cb()
  })
}

// Watch theme files
function watchFiles () {
  console.log('Watching files...')

  // Watch assets
  watch('./assets/sass/**/*.scss', processAssets)

  // Watch templates
  watch('./**/*.hbs', cb => {
    browserSync.reload()

    cb()
  })
}

// Scan theme with GScan
function scanTheme (theme) {
  console.log('This command is currently disabled. Use the Gscan CLI instead.')
}

// Zip production version of theme
function zipTheme () {
  console.log('Theme zipped for production')
}

// fmlr dev
exports.dev = series(processAssets, startServer, watchFiles)

// fmlr scan
exports.scan = scanTheme

// fmlr build
exports.build = series(processAssets, zipTheme, scanTheme)