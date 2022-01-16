const {spawn} = require('child_process');
const core = require('@actions/core');
const exec = require('@actions/exec');
const proc = spawn('node', ['./animalLogger.js']);

// let output = '';

// proc.stdout.on('data', chunk => {
//   output += chunk.toString();
// });
// proc.on('exit', () => {
//   var filterArray = output.split('\n').filter(function (val) {
//     return /@considr-it\/ponder-server+:\sStatements/.test(val);
//   });

//   console.log(filterArray);
// });

// proc.stderr.on('data', data => {
//   console.error(`child stderr:\n${data}`);
// });

async function run() {
  try {
    const someInput = core.getInput('some_input');
    await exec.exec(`bash ${__dirname}/some-bash-script.sh ${someInput}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
