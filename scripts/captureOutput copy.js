const {spawn} = require('child_process');

const proc = spawn('node', ['./animalLogger.js']);

let output = '';

proc.stdout.on('data', chunk => {
  output += chunk.toString();
});
proc.on('exit', () => {
  var filterArray = output.split('\n').filter(function (val) {
    return /@considr-it\/ponder-server+:\sStatements/.test(val);
  });

  console.log(filterArray);
});

proc.stderr.on('data', data => {
  console.error(`child stderr:\n${data}`);
});
