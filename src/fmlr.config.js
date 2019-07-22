module.exports = {
  sass: {
    src: './assets/sass/**/*.scss',
    dest: './assets/css',
    options: {
      style: 'compressed'
    }
  },
  hbs: {
    path: './**/*.hbs'
  },
  browserSync: {
    options: {
      logPrefix: 'fmlr',
      proxy: 'localhost:2368'
    }
  }
}
