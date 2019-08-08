module.exports = {
  defaultTheme: 'polymoon/spirit',
  options: {
    sass: {
      style: 'compressed'
    },
    browserSync: {
      logPrefix: 'Server',
      proxy: 'http://localhost:2368'
    }
  }
}
