someMaps.data = (() => {
  // Declare vars
  var initModule, configMap;

  configMap = {
    US_bbox: [-171.791110603, 18.91619, -66.96466, 71.3577635769],
    cellSide: 5,
    options: { units: 'miles' },   
  }

  initModule = async () => {
    var initMsg = "someMaps.data initialized.";
    return initMsg
  }

  return {
    initModule: initModule,
  }
})();