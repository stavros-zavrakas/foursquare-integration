define(function () {
  var levels = Object.freeze({
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
  });

  var debugMode = true;
  var currentLevel = 0;

  function log(level, msg) {
    if (console && debugMode && level >= currentLevel) {
      console.log(msg)
    }
  }

  var logger = {
    debug: log.bind(this, 0),
    info: log.bind(this, 1),
    warn: log.bind(this, 2),
    error: log.bind(this, 3),
  };

  logger.debug('logger.js loaded');

  return logger;
});
