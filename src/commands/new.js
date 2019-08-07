const { Command } = require('@oclif/command')
const { cli } = require('cli-ux')
const config = require('../config')
const download = require('download-git-repo')

class NewCommand extends Command {
  async run() {
    const { args } = this.parse(NewCommand)
    const starterTheme = args.theme ? args.theme : config.defaultTheme

    cli.action.start(`Downloading starter theme from ${starterTheme}...`)

    download(starterTheme, args.name, err => {
      cli.action.stop('done. Happy theming! ❤')
    })
  }
}

NewCommand.description = 'Start a new Ghost theme'

NewCommand.args = [
  {
    name: 'name',
    description: 'Theme name',
    required: true
  },
  {
    name: 'theme',
    description: 'Alternate theme to start with',
    required: false
  }
]

module.exports = NewCommand
