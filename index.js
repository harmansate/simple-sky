#!/usr/bin/env node

const opn = require('opn')

const url = 'https://github.com/harmansate'

opn(url, { wait: false })
    .then(() => console.log(`opening ${url}`))