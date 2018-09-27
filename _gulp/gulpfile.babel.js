'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import browserSync from 'browser-sync'
import pkg from '../package.json'
import zip from 'gulp-zip'
import gscan from 'gscan'

const server = browserSync.create()

// Sass -> PostCSS -> CSS
function styles () {
  // PostCSS plugins
  const plugins = [ autoprefixer() ]

  return gulp.src('../assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('../assets/css'))
    .pipe(server.stream())
}

// BrowserSync
function preview () {
  server.init({
    proxy: 'http://localhost:2368'
  })

  gulp.watch(['../*.hbs', '../partials/*.hbs'], server.reload)
  gulp.watch('../assets/sass/**/*.scss', styles)
}

// Zip theme for production
// TODO: Fix the file glob in gulp.src so it gets the correct files and puts them in the correct places
function pack () {
  return gulp.src(['../**/*.hbs', '../assets/**/**', '!../assets/**/*.scss', '../package.json'])
    .pipe(zip(`${pkg.name}.zip`))
    .pipe(gulp.dest('..'))
}

// Gscan
function scan (done) {
  gscan.checkZip({
    path: `../${pkg.name}.zip`,
    name: pkg.name
  }).then(result => {
    console.log(result)
  }).catch(error => {
    console.error(error)
  })

  done()
}

exports.develop = gulp.series(styles, preview)
exports.pack = gulp.series(pack, scan)
