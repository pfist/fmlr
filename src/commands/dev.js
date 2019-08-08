const { Command } = require('@oclif/command')
const { cli } = require('cli-ux')
const config = require('../config')
const fs = require('fs-extra')
const tasks = require('../tasks')

class DevCommand extends Command {
  async run () {
    try {
      // Make sure there's a valid Ghost theme in this directory
      const pkg = await fs.readJson('./package.json')

      if (pkg.engines.ghost) {
        // Notify user we found a Ghost theme
        this.log(`Found ${pkg.name} ${pkg.version}`)

        // Start development server
        tasks.dev()
      }
    } catch (err) {
      this.log('No Ghost theme found.')
    }
  }
}

DevCommand.description = `Start a live development server`

module.exports = DevCommand
