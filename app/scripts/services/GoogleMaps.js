(function() {
  function GoogleMaps() {
    function initMap() {
      var portland = {lat: 45.5231, lng: -122.6765};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: portland,
        draggable: false,
        scrollwheel: false,
        disableDefaultUI: true,
        zoomControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: [
          {
            "stylers": [
              {"visibility": "on"},
              {"saturation": -100},
              {"gamma": 0.54}
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {"visibility": "off"}
            ]
          },
          {
            "featureType": "water",
            "stylers": [
              {"color": "#4d4946"}
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
              {"visibility": "off"}
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {"visibility": "simplified"}
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {"color": "#ffffff"}
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
              {"visibility": "simplified"}
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {"color": "#ffffff"}
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {"gamma": 0.48}
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [
              {"visibility": "off"}
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {"gamma": 7.18}
            ]
          }
        ]
      });

      var icon = {
        url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/2955-200.png',
        scaledSize: new google.maps.Size(40, 40)
      };

      var marker = new google.maps.Marker({
        position: portland,
        map: map,
        icon: icon
      });
    }

    return {
      initMap: initMap
    };
  }

  angular
    .module('angelasWebsite')
    .factory('GoogleMaps', GoogleMaps);
})();