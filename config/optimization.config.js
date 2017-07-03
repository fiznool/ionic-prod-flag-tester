'use strict';

var path = require('path');
var merge = require('webpack-merge');

var projectRootDir = process.env.IONIC_ROOT_DIR;
var appScriptsDir = process.env.IONIC_APP_SCRIPTS_DIR;

var originalConfig = require(path.join(appScriptsDir, 'config', 'optimization.config.js'));

var config = {
  resolve: {
    alias: {
      src: path.join(projectRootDir, 'src')
    }
  }
};

module.exports = merge(originalConfig, config);
