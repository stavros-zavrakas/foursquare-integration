define(function ($) {
  var debugMode = true;

  function info(msg) {
    if (console && debugMode) {
      console.log(msg)
    }
  }

  return {
    info: info
  };
});
