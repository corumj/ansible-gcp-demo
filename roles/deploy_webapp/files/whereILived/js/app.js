var app = (function(){

  var initModule = function() {
    console.log("App initialized.");
    app.shell.initModule();
  }

  return {
    initModule: initModule
  }
}());