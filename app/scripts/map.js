var parkings_objects = [];
var map = L.mapbox.map('map', 'gillesdemey.map-vevzn2un');

// Itterate parkings and add markers to the map
var parkings = $.jStorage.get("parkings");
if ( typeof parkings !== "undefined" ) {
  $(parkings).each(function() {
    var parking = new Parking(this);

    addMarker(parking);
  });

  // Fit to view
  var group = new L.featureGroup(parkings_objects);
  console.log(group);
  map.fitBounds(group.getBounds());
}

function addMarker(parking) {
  // Add the markers to the map
  var layer = L.mapbox.markerLayer(parking.getGeoJson()).addTo(map);
  parkings_objects.push(layer);
};