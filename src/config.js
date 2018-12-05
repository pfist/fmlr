module.exports = {
  sass: {
    src: './assets/sass/**/*.scss',
    dest: './assets/css',
    style: 'compressed'
  },
  templates: {
    src: './**/*.hbs'
  },
  browsersync: {
    logPrefix: 'fmlr',
    proxy: 'localhost:2368'
  }
}
