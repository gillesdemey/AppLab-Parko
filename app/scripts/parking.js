function Parking(parking) {
  this.name         = parking.GeneralInfo.IDInfo.Name;
  this.url          = parking.GeneralInfo.IDInfo.URL;
  this.banner       = parking.GeneralInfo.IDInfo.LogoURL;
  this.address      = parking.GeneralInfo.Address;
  this.geolocation  = parking.GeneralInfo.GeoLocation;
  this.contact      = parking.GeneralInfo.Contact;
  this.parkingtype  = parking.ParkingType;
}

Parking.prototype.getLocation = function() {
  return this.address.StreetName + ", " + this.address.PostalCode + " " + this.address.Location;
}

// underground or regular parking
Parking.prototype.getIcon = function() {
  var icon = "parking";
  if ( $.inArray("underground", this.parkingtype) !== -1) {
    icon = "parking-garage"
  }
  return icon;
}

Parking.prototype.getGeoJson = function() {
  return {
    type: "Feature",
    geometry : {
      type: 'Point',
      coordinates: [this.geolocation.Longitude, this.geolocation.Latitude]
    },
    properties : {
      title: this.name,
      description: this.getLocation(),
      // http://mapbox.com/developers/simplestyle/
      'marker-size': 'small',
      'marker-color': '#095e7a',
      'marker-symbol': this.getIcon()
    }
  };
}