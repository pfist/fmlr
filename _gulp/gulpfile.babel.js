'use strict'

import gulp from 'gulp'

// Sass -> PostCSS -> CSS
function styles () {}

// BrowserSync
function server () {}

// Gscan
function scan () {}

// Zip theme for production
function zip () {}

exports.develop = series(styles, server)
exports.pack = series(scan, zip)
exports.scan = scan
