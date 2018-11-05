'use strict'

const { Command, flags } = require('@oclif/command')
const { cli } = require('cli-ux')
const fs = require('fs-extra')
const Listr = require('listr')

class CreateCommand extends Command {
  async run () {
    // Prompt user for basic theme info
    const name = await cli.prompt('Theme name')
    const description = await cli.prompt('Theme description')
    const postsPerPage = await cli.prompt('Posts per page')

    // Location where new theme will be created
    const themeDir = `${process.cwd()}/${name}`

    // Theme's package.json will be generated from this object
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

    const tasks = new Listr([
      // Scaffold a new theme
      {
        title: 'Creating theme files',
        task: () => fs.copy(`${__dirname}/../themes/starter`, themeDir)
        .catch(error => {
          this.error(error)
        })
      },
      // Generate a package.json
      {
        title: 'Creating package.json',
        task: () => fs.writeJson(`${themeDir}/package.json`, themePkg, { spaces: 2 })
        .catch(error => {
          this.error(error)
        })
      }
    ])

    tasks.run().catch(error => {
      this.error(error)
    })
  }
}

CreateCommand.description = `Create a new Ghost theme`

module.exports = CreateCommand
