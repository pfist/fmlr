const { Command } = require('@oclif/command')
const { cli } = require('cli-ux')

class DevCommand extends Command {
  async run () {
    // Add command logic here
  }
}

DevCommand.description = `Start a live development server`

module.exports = DevCommand
