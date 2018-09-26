'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import browserSync from 'browser-sync'
import pkg from './package.json'

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

// Zip theme for production
function zip () {
  return gulp.src(['**/*', '!node_modules/**', `!${pkg.name}.zip`, '!assets/sass/**/*'])
    .pipe(zip(`${pkg.name}.zip`))
    .pipe(gulp.dest('.'))
}

// Gscan
function scan () {
  gscan.checkZip({
    path: `${pkg.name}.zip`,
    name: pkg.name
  }).then(result => {
    console.log(result)
  }).catch(error => {
    console.error(error)
  })
}

exports.develop = series(styles, preview)
exports.pack = series(zip, scan)
