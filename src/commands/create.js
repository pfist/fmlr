'use strict'

const { Command, flags } = require('@oclif/command')
const { cli } = require('cli-ux')
// const fs = require('fs-extra')

class CreateCommand extends Command {
  async run () {
    // Prompt the user for information
    const name = await cli.prompt('Theme name')
    const description = await cli.prompt('Theme description')
    const license = await cli.prompt('License')
    const postsPerPage = await cli.prompt('Posts per page')
    const themeDir = `${process.cwd()}/${name}`

    // Scaffold a new theme
    try {
      cli.action.start('Creating theme files')

      await fs.copy(`${__dirname}/../themes/starter`, themeDir)

      cli.action.stop('Done!')
    } catch (err) {
      this.error(err)
    }

    // Create a package.json
    try {
      cli.action.start('Creating package.json')

      const themePkg = {
        name: name,
        description: description,
        version: '0.0.0',
        engines: {
          ghost: '>=2.0.0'
        },
        config: {
          posts_per_page: postsPerPage
        }
      }

      await fs.writeJson(`${themeDir}/package.json`, themePkg, { spaces: 2 })

      cli.action.stop('Done!')
    } catch (err) {
      this.error(err)
    }
  }
}

CreateCommand.description = `Create a new Ghost theme`

module.exports = CreateCommand
