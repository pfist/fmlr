const { Command, flags } = require('@oclif/command')

class DevelopCommand extends Command {
  async run () {
    // Make sure this directory is a Ghost theme
    // Compile assets
    // Start up BrowserSync
    this.log('Hello from the Develop command!')
  }
}

DevelopCommand.description = `Start a development server`

module.exports = DevelopCommand
