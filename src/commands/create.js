'use strict'

const { Command } = require('@oclif/command')
const { cli } = require('cli-ux')
const download = require('download-git-repo')
const fs = require('fs-extra')

// fmlr config
const config = require('../fmlr.config.js')

class CreateCommand extends Command {
  async run () {
    // Prompt user for basic theme info
    const name = await cli.prompt('Theme name')
    const description = await cli.prompt('Theme description')

    // Location where new theme will be created
    const themeDir = `${process.cwd()}/${name}`

    // Download default theme
    download(config.defaultTheme, themeDir, err => {
      if (err) {
        this.error(err)
      }

      // Get theme's package.json
      fs.readJson(`${themeDir}/package.json`)
        .then(pkg => {
          const themeInfo = {
            name: name,
            description: description,
            version: '0.0.0'
          }

          // Overwrite name and description
          fs.writeJson(`${themeDir}/package.json`, { ...pkg, ...themeInfo }, { spaces: 2 }, err => {
            if (err) {
              this.error(err)
            }

            console.log('Your theme is ready!')
          })
        })
    })
  }
}

CreateCommand.description = `Create a new Ghost theme`

module.exports = CreateCommand
