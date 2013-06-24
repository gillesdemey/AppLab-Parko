// Get the XML data from the Parko service
$.get('http://pipes.yahoo.com/pipes/pipe.run?_id=efa4c253496960ad9437545b9d9446e6&_render=json', function success(data) {

  var parkings = data.value.items;

  $.each(parkings, function() {
    var name = this.GeneralInfo.IDInfo.Name;
    var banner = this.GeneralInfo.IDInfo.LogoURL;
    var url = this.GeneralInfo.IDInfo.URL;

    var contact = this.GeneralInfo.Contact;
    var address = this.GeneralInfo.Address;
    var geolocation = this.GeneralInfo.GeoLocation;

    $("#parkings").append("<li>" + name + "</li>");
  });

  // Collect the data in the localStorage
  $.jStorage.set('parkings', parkings);

});

// Get the bezetting data
function getBezetting() {
  $.get("http://pipes.yahoo.com/pipes/pipe.run?_id=593916dec9905ea5f29a302f04318eaf&_render=json", function success(data) {
    console.log(data);
  });
}