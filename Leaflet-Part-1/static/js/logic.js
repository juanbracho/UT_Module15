// Leaflet Map Setup:

var myMap = L.map("map", {
    center: [37.7749, -122.4194],  // Default to somewhere like San Francisco
    zoom: 5
  });
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

// Fetching GeoJSON with D3

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    console.log(data); // Make sure data is fetched correctly
    createFeatures(data.features);  // Pass the features to the function for marker creation
  });

// Plotting the Earthquake Data

function createFeatures(earthquakeData) {
    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]} km</p>`);
    }
  
    function circleMarker(feature, latlng) {
      let options = {
        radius: feature.properties.mag * 4,  // Scale by magnitude
        fillColor: getColor(feature.geometry.coordinates[2]),  // Use depth to set color
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      return L.circleMarker(latlng, options);
    }
  
    // Add earthquake markers to map
    L.geoJSON(earthquakeData, {
      pointToLayer: circleMarker,  // Custom circle marker
      onEachFeature: onEachFeature  // Popup for each feature
    }).addTo(myMap);
  }

// Color by Depth:

function getColor(depth) {
    return depth > 90 ? '#d73027' :
           depth > 70 ? '#fc8d59' :
           depth > 50 ? '#fee08b' :
           depth > 30 ? '#d9ef8b' :
           depth > 10 ? '#91cf60' :
                        '#1a9850';
  }

// Add Legends

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
      depths = [0, 10, 30, 50, 70, 90],
      labels = [];

  for (var i = 0; i < depths.length; i++) {
    div.innerHTML +=
      '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
      depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
  }

  return div;
};

legend.addTo(myMap);