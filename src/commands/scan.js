const { Command, flags } = require('@oclif/command')

class ScanCommand extends Command {
  async run () {
    // Make sure this directory is a Ghost theme
    // Run Gscan
    this.log('Hello from the Scan command!')
  }
}

ScanCommand.description = `Scan your theme with Gscan`

module.exports = ScanCommand
