const { Command } = require('@oclif/command')
const fs = require('fs-extra')
const tasks = require('../tasks')
const { series } = require('gulp')

class BuildCommand extends Command {
  async run () {
    try {
      // Make sure there's a valid Ghost theme in this directory
      const pkg = await fs.readJson('./package.json')

      if (pkg.engines.ghost) {
        // Notify user we found a Ghost theme
        this.log(`Found ${pkg.name} ${pkg.version}`)

        // Build theme for production
        await tasks.clean()
        await tasks.assets()
        await tasks.zip(pkg.name)
      } else {
        this.error('No Ghost theme found')
      }
    } catch (err) {
      this.error(err)
    }
  }
}

BuildCommand.description = `Build a production version of your theme`

module.exports = BuildCommand