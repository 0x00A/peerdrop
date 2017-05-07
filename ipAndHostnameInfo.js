var ip = require('ip');
var os = require('os')
var clc = require('cli-color');

console.log(" ")
console.log("started the git daemon")
console.log(" ")
console.log(clc.yellowBright('others can now clone and pull from you by doing things like:'));
console.log(" ")
console.log(`git clone git://${ip.address()}/ peerdrop`)
console.log("cd peerdrop ")
console.log(`git remote add ${os.hostname()} git://${ip.address()}/`)
console.log(`git pull ${os.hostname()}`)
console.log(" ")

