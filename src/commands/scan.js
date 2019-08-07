const { Command } = require('@oclif/command')
const { cli } = require('cli-ux')

class ScanCommand extends Command {
  async run () {
    // Add command logic here
  }
}

ScanCommand.description = `Scan your theme locally with GScan`

module.exports = ScanCommand
