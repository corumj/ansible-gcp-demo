var someMaps = (() => {
  // Initialize the app and trigger initialization of data and shell modules
  var initModule = async () => {
    console.log("someMaps initialized.");
    let dataModule = await someMaps.data.initModule()
      .then((msg) => {
        console.log(msg);
        return someMaps.shell.initModule()
      })
      .then((msg) => {
        console.log(msg);
      });
    
  }

  return {
    initModule: initModule
  }
})();