var map = L.mapbox.map('map', 'gillesdemey.map-vevzn2un');

// Itterate parkings and add markers to the map
var parkings = $.jStorage.get("parkings");
if ( typeof parkings !== "undefined" ) {
  $(parkings).each(function() {

    //console.log(this);

    var parking = new Parking(this);
    console.log(parking);

    addMarker(parking);
  });
}

function addMarker(parking) {
  // Add the markers to the map
  L.mapbox.markerLayer(parking.getGeoJson()).addTo(map);
};