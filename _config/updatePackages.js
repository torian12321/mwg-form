const ncu = require('npm-check-updates');

ncu.run({
  // Always specify the path to the package file
  packageFile: 'package.json',
  // Any command-line option can be specified here.
  // These are set by default:
  silent: true,
  jsonUpgraded: true
}).then((upgraded) => {
  console.log('dependencies to upgrade:', upgraded);
});