var sharedConfig = require('./karma.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //test files
    './unit/*.js',
  ]);

  config.set(conf);
};