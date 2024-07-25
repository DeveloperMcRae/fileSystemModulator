"use strict"
const fs = require ('fs')
const SystemModulator = class
{
  constructor (filePath)
  {
    this.filePath = filePath
  }
  getFilePath ()
  {
    return this.filePath
  }
  fileExists ()
  {
    return fs.existsSync (this.filePath)
  }
  fileType ()
  {
    if (fs.lstatSync (this.filePath).isDirectory ())
    {    
      return 'directory'
    }
    else
    {
        return 'file'
    }
      
  }
  readFile (encryptionType)
  {
    return fs.readFileSync (this.filePath, encryptionType || 'utf-8')
  }
  readDir ()
  {
    return fs.readdirSync (this.filePath)
  }
}
module.exports = SystemModulator