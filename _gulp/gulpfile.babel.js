'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import browserSync from 'browser-sync'

const server = browserSync.create()

// Sass -> PostCSS -> CSS
function styles () {
  // PostCSS plugins
  const plugins = [ autoprefixer() ]

  return gulp.src('assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('assets/css'))
    .pipe(server.stream())
}

// BrowserSync
function preview () {
  server.init({
    proxy: 'http://localhost:2368'
  })

  watch(['*.hbs', 'partials/*.hbs'], server.reload())
  watch('assets/sass/**/*.scss', styles)
}

// Gscan
function scan () {}

// Zip theme for production
function zip () {}

exports.develop = series(styles, preview)
exports.pack = series(scan, zip)
exports.scan = scan
