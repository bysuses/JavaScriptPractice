const { exec } = require('child_process');

exec('node test.js', (error, stdout, stderr) => {
  if (error) console.log('error');
  if (stdout) console.log('stdout\n', stdout);
  if (stderr) console.log('stderr\n', stderr);
});
