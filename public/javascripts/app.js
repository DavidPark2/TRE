var map;
var mapDiv;
var longitude = -87.629181;
var latitude = 41.8906528;
var marker;

function initMap() {
  mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    zoom: 18,
    center: {lat: parseFloat(latitude), lng: parseFloat(longitude)},
    disableDefaultUI: false
  })

  // google.maps.event.addDomListener(mapDiv, 'click', function() {
  //   $('#myModal').modal('show')
  // });

// added stuff to make modals work +++++++++++++++++++++++++++
  google.maps.event.addListener(mapDiv, 'click', function() {
		$('#myModal').modal('show')
  });

  google.maps.event.addDomListener(window, 'load', initialize);
}

function placeMarkerAndPanTo(latLng, map) {
  marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);
}



// // Variables
// var longitude = 0;
// var latitude = 0;
// var marker;
// var map;
//
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: parseFloat(latitude), lng: parseFloat(longitude)},
//     zoom: 4,
//     disableDefaultUI: false
//     });
//     google.maps.event.addListener(map, 'click', function(event) {
//       console.log(event.latLng.lng())
//       latitude = event.latLng.lat()
//       longitude = event.latLng.lng()
//       $("#coordinate").val(event.latLng.lat() + ", " + event.latLng.lng())
//       $("#coordinate").select()
//       if (marker) { marker.setMap(null) }
//       marker = new google.maps.Marker({ position: event.latLng, map: map})
//       $("#lat").html(latitude)
//       $("#lon").html(longitude)
//     });
// }
