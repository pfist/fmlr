const { Command, flags } = require('@oclif/command')

class InstallCommand extends Command {
  async run () {
    const { flags } = this.parse(InstallCommand)
    // Download the requested theme
    this.log('Hello from the Install command!')
  }
}

InstallCommand.description = `Install an existing theme from GitHub, Gitlab, or Bitbucket`

module.exports = InstallCommand
