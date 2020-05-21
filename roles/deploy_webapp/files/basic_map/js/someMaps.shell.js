someMaps.shell = (function(){
  // initialize variables
  var initModule, initMap, configMap;

  configMap = {
    lat: 33.3,
    long: -111.84,
    level: 4
  }

  initModule = function() {
    console.log("someMaps.shell initialized.");
    initMap();
  }

  initMap = function() {
    var myMap = L.map('someMap').setView([configMap.lat, configMap.long], configMap.level);

    L.esri.basemapLayer('Topographic').addTo(myMap);

    //L.geoJSON(someMaps.data.createGrid()).addTo(myMap);
  }

  return {
    initModule: initModule
  }
}());