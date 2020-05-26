someMaps.shell = (() => {
  // initialize variables
  var initModule, configMap, drawMap;

  configMap = {};

  initModule = async () => {
    var initMsg = "someMaps.shell initialized.";

    let width = 960,
        height = 500;

    const svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);
    
    const projection = d3.geoNaturalEarth2();

    const path = d3.geoPath().projection(projection);

    const zoom_map = d3.zoom()
      .scaleExtent([0.3,6])
      .translateExtent([[-1000,-1000],[1000,1000]])
      .on("zoom", () => {
        var offset = [
          d3.event.transform.x,
          d3.event.transform.y
        ];

        let scale = d3.event.transform.l*2000;

        projection.translate(offset)
          .scale(scale);

        svg.selectAll("path")
          .attr("d", path);
        
      })

    // const graticule = d3.geoGraticule();

    d3.json("https://unpkg.com/world-atlas@2.0.2/countries-110m.json")
    .then((world) => {
      console.log(path);
      // svg.append("path")
      // .datum(graticule)
      // .attr("class", "graticule")
      // .attr("d", path);
  
      // svg.append("path")
      //   .datum(graticule.outline)
      //   .attr("class", "foreground")
      //   .attr("d", path);
  
      svg.append("g")
        .attr("id", "map")
        .attr("cursor", "pointer")
        .call(zoom_map)
        .call(zoom_map.transform,
          d3.zoomIdentity
            .translate(width/2, height/2)
            .scale(1)
        )
        .selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append("path")
        .attr("d", path)
    })
    .catch((err) => {
      console.log(err);
    })
    return initMsg
  }

  drawMap = (err, world, svg, path, graticule) => {
    if (err) throw err 

    svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

    svg.append("path")
      .datum(graticule.outline)
      .attr("class", "foreground")
      .attr("d", path);

    svg.append("g")
      .selectAll("path")
      .data(topojson.feature(world, world.objects.countries).features)
      .enter().append("path")
      .attr("D", pathl)
  }

  return {
    initModule: initModule
  }
})();