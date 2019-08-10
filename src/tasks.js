const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync').create()
const config = require('./config')
const { cli } = require('cli-ux')
const del = require('del')
const { src, dest, series, watch } = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const zip = require('gulp-zip')

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
function zipTheme (name) {
  cli.action.start('Building theme for production')

  return src(['./**/*', '!./_build', '!./assets/sass', '!./assets/sass/**/*.scss'])
    .pipe(zip(`${name}.zip`))
    .pipe(dest('_build'))
    .on('end', () => { cli.action.stop() })
}

// Remove old build files
function cleanBuild () {
  return del('./_build')
}

// Export build tasks separately so we can pass arguments to them
exports.clean = cleanBuild
exports.assets = processAssets
exports.zip = zipTheme

// fmlr dev
exports.dev = series(processAssets, startServer, watchFiles)

// fmlr scan
exports.scan = scanTheme

// fmlr build
exports.build = series(cleanBuild, processAssets, zipTheme, scanTheme)