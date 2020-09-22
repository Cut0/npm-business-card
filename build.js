'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic'
}

const data = {
  name: chalk.hex('#d09afd')('Cut 0'),
  handle: chalk.hex('#d09afd')('frontend engineer?'),
  university: chalk.green(' Tokyo University of Science B2'),
  work: chalk.hex('#e7b558')('株式会社フューチャーリンクネットワーク'),
  twitter: chalk.blue('https://twitter.com/pqppqqqppppp'),
  github: chalk.white('https://github.com/Cut0'),
  web: chalk.cyan('https://portfolio-ray.web.app'),
  labelWork: chalk.hex('#e7b558').bold('       Work:'),
  labelUniversity: chalk.green.bold(' University:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.blue.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.cyan.bold('        Web:'),
}

const newline = '\n'
const heading = chalk.bold(`${data.name} / ${data.handle}`)
const universiting= `${data.labelUniversity} ${data.university}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`


const output = '             ' + heading + newline +
               newline + newline +
               universiting + newline + newline +
               working + newline + newline + 
               twittering + newline + newline + 
               githubing + newline + newline + 
               webing  


fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.hex('#d09afd')(boxen(output, options)))
