var someMaps = (function(){

  var initModule = function() {
    console.log("someMaps initialized.");
    someMaps.shell.initModule();
    someMaps.data.initModule();
  }

  return {
    initModule: initModule
  }
}());