const { Command, flags } = require('@oclif/command')

class BuildCommand extends Command {
  async run () {
    // Make sure this directory is a Ghost theme
    // Compile assets
    // Run Gscan
    // Create a zip file
    this.log('Hello from the Build command!')
  }
}

BuildCommand.description = `Prepare your theme for production`

module.exports = BuildCommand
