const { Command, flags } = require('@oclif/command')

class CreateCommand extends Command {
  async run () {
    // Prompt the user for information
    // Scaffold a new theme
    // Create a package.json
    this.log('Hello from the Create command!')
  }
}

CreateCommand.description = `Create a new Ghost theme`

module.exports = CreateCommand
