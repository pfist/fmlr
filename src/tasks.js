const autoprefixer = require('autoprefixer')
const bs = require('browser-sync').create()
const config = require('./config')
const { src, dest, series, watch } = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')

// Process assets
function processAssets (cb) {
  console.log('Assets processed')

  cb()
}

// Start live development server
function startServer (cb) {
  console.log('Development server started')

  cb()
}

// Watch theme files
function watchFiles (cb) {
  console.log('Watching theme files')

  cb()
}

// Scan theme with GScan
function scanTheme (cb) {
  console.log('Theme scanned')

  cb()
}

// Zip production version of theme
function zipTheme (cb) {
  console.log('Theme zipped for production')

  cb()
}

// fmlr dev
exports.dev = series(processAssets, startServer, watchFiles)

// fmlr scan
exports.scan = scanTheme

// fmlr build
exports.build = series(processAssets, zipTheme, scanTheme)