const path      = require('path');
const pkg       = require('./package.json');
const wp_common = require('./_config/wp_common');

module.exports = {
  title         : `Components Styleguide v${pkg.version}`,
  template      : './styleguide/template.html',
  serverPort    : 6060,
  defaultExample: false,
  showUsage     : false,
  showCode      : false,
  showSidebar   : true,
  highlightTheme: 'material',
  skipComponentsWithoutExample: true,
  webpackConfig : wp_common,
	sections: [
    { name: 'Grid'      , components: 'src/components/_grid/**/index.jsx' },
    { name: 'Components', components: 'src/components/*/index.jsx' },
    { name: 'Form'      , components: 'src/components/_form/**/index.jsx' }
	],
  getComponentPathLine: function (componentPath) {
    // Use folder name as import reference
    var dir = path.dirname(componentPath).split('/');
    return `import { ${dir[dir.length-1]} } from 'react-test';`;
	},
};