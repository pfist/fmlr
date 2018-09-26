'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'

// Sass -> PostCSS -> CSS
function styles () {
  // PostCSS plugins
  const plugins = [ autoprefixer() ]

  return gulp.src('assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('assets/css'))
}

// BrowserSync
function server () {}

// Gscan
function scan () {}

// Zip theme for production
function zip () {}

exports.develop = series(styles, server)
exports.pack = series(scan, zip)
exports.scan = scan
