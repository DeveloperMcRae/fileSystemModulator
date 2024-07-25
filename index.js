"use strict"
const root = __dirname
const Mod = require (`${root}/Module`)

module.exports = Mod


const test = new Mod (`${root}/tester.txt`)

console.log ('File Path=\n', test.getFilePath (), '\n')

console.log ('File Exists =\n', test.fileExists ())

console.log ('File data=\n', test.readFile (), '\n')

console.log ('File type=\n', test.fileType (), '\n')

const test2 = new Mod(root)

console.log ('File Exists=\n', test2.fileExists ())

console.log ('Directory files=\n', test2.readDir ())