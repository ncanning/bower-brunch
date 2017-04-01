'use strict';

const exec = require('child_process').exec;
class BowerRunner {
  constructor(config) {
    this.config = config.plugins.bower || {};
  }

  onCompile(files) {
      console.log("running bower...");
      let bowerCommand = 'pushd priv/static/components && bower install && popd';
      exec(bowerCommand, (error, stdout, stderr) => {
          if (error) {
              console.log(error);
          } else {
              console.log("bower install complete!");
          }
      });
  }
}

BowerRunner.prototype.brunchPlugin = true;

module.exports = BowerRunner;
