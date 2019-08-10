const { Command } = require('@oclif/command')
const fs = require('fs-extra')
const tasks = require('../tasks')

class ScanCommand extends Command {
  async run () {
    // const { args } = this.parse(ScanCommand)

    try {
      // Make sure there's a valid Ghost theme in this directory
      const pkg = await fs.readJson('./package.json')

      if (pkg.engines.ghost) {
        // Notify user we found a Ghost theme
        this.log(`Found ${pkg.name} ${pkg.version}`)

        // Scan theme.zip file - this is output by the Build command
        tasks.scan()
      }
    } catch (err) {
      this.error('No Ghost theme found')
    }
  }
}

ScanCommand.description = `Scan your theme locally with GScan`

// ScanCommand.args = [
//   {
//     name: 'path',
//     description: 'Path to theme.zip file',
//     required: true
//   }
// ]

module.exports = ScanCommand
