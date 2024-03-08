#!/usr/bin/env node

const opn = require('opn')

const url = 'https://github.com/harmansate/simple-sky'

opn(url, { wait: false })
    .then(() => console.log(`opening ${url}`))
