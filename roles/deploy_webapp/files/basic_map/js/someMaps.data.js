someMaps.data = (function(){

  // Declare vars
  var initModule, createGrid, configMap;

  configMap = {
    US_bbox: [-171.791110603, 18.91619, -66.96466, 71.3577635769],
    cellSide: 50,
    options: { units: 'miles' }
  }

  initModule = function() {
    console.log("someMaps.data initialized.");
  }

  // Create grid
  createGrid = function() {
    var pointGrid = turf.pointGrid(configMap.US_bbox, configMap.cellSide, configMap.options)
    return pointGrid
  }
  return {
    initModule: initModule,
    createGrid: createGrid
  }
}());