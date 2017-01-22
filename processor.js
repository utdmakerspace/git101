var sys = require('util')
var exec = require('child_process').exec;

//change the directory to names
process.chdir('./names');

const testFolder = './';
const fs = require('fs');

//read each file from the names file
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {

    // set up our terminal command to execute each file
    var cmd = "node " + file;
    
    exec(cmd, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    if (error !== null) {
    console.log('exec error: ' + error);
    }
});

});
})
